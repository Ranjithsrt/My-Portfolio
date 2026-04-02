import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// Validation helper functions
const validators = {
  // Email validation regex
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Check for spam patterns
  containsSpam: (text) => {
    const spamPatterns = [
      /http[s]?:\/\//gi,  // URLs
      /<script>/gi,       // Script tags
      /javascript:/gi,    // JavaScript protocol
      /on\w+=/gi,        // Event handlers
      /SELECT\s+/gi,      // SQL injection
      /INSERT\s+/gi,
      /UPDATE\s+/gi,
      /DELETE\s+/gi,
      /DROP\s+/gi,
    ];
    return spamPatterns.some(pattern => pattern.test(text));
  },

  // Sanitize input
  sanitize: (text) => {
    return text
      .replace(/[<>]/g, '')  // Remove < and >
      .replace(/javascript:/gi, '')
      .trim();
  },

  // Check string length
  isValidLength: (text, min, max) => {
    const length = text.length;
    return length >= min && length <= max;
  }
};

// @route   POST /api/messages
// @desc    Submit a new contact message
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Check all fields present
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }

        // Trim inputs
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();

        // Validate lengths
        if (!validators.isValidLength(trimmedName, 2, 50)) {
            return res.status(400).json({
                success: false,
                error: 'Name must be between 2 and 50 characters'
            });
        }

        if (!validators.isValidLength(trimmedSubject, 5, 100)) {
            return res.status(400).json({
                success: false,
                error: 'Subject must be between 5 and 100 characters'
            });
        }

        if (!validators.isValidLength(trimmedMessage, 10, 1000)) {
            return res.status(400).json({
                success: false,
                error: 'Message must be between 10 and 1000 characters'
            });
        }

        // Validate email format
        if (!validators.isValidEmail(trimmedEmail)) {
            return res.status(400).json({
                success: false,
                error: 'Please enter a valid email address'
            });
        }

        // Check for spam in all fields
        const allText = `${trimmedName} ${trimmedSubject} ${trimmedMessage}`;
        if (validators.containsSpam(allText)) {
            return res.status(400).json({
                success: false,
                error: 'Message contains invalid content'
            });
        }

        // Sanitize inputs
        const sanitizedName = validators.sanitize(trimmedName);
        const sanitizedSubject = validators.sanitize(trimmedSubject);
        const sanitizedMessage = validators.sanitize(trimmedMessage);

        const newMessage = new Message({
            name: sanitizedName,
            email: trimmedEmail.toLowerCase(),
            subject: sanitizedSubject,
            message: sanitizedMessage,
            ipAddress: req.ip || req.connection.remoteAddress,
            userAgent: req.headers['user-agent']
        });

        await newMessage.save();

        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            data: {
                id: newMessage._id,
                name: newMessage.name,
                email: newMessage.email,
                createdAt: newMessage.createdAt
            }
        });

    } catch (error) {
        console.error('Error saving message:', error);

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                error: 'Validation Error',
                messages
            });
        }

        if (error.name === 'MongoServerError' && error.code === 11000) {
            return res.status(409).json({
                success: false,
                error: 'Duplicate entry detected'
            });
        }

        res.status(500).json({
            success: false,
            error: 'Server error. Please try again later.'
        });
    }
});

// @route   GET /api/messages
// @desc    Get all messages (for admin)
// @access  Private (should add auth middleware)
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: messages.length,
            data: messages
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch messages'
        });
    }
});

// @route   GET /api/messages/:id
// @desc    Get single message
// @access  Private
router.get('/:id', async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        
        if (!message) {
            return res.status(404).json({
                success: false,
                error: 'Message not found'
            });
        }

        res.status(200).json({
            success: true,
            data: message
        });
    } catch (error) {
        console.error('Error fetching message:', error);
        
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid message ID format'
            });
        }

        res.status(500).json({
            success: false,
            error: 'Failed to fetch message'
        });
    }
});

// @route   DELETE /api/messages/:id
// @desc    Delete a message
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        const message = await Message.findByIdAndDelete(req.params.id);
        
        if (!message) {
            return res.status(404).json({
                success: false,
                error: 'Message not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Message deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting message:', error);
        
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                error: 'Invalid message ID format'
            });
        }

        res.status(500).json({
            success: false,
            error: 'Failed to delete message'
        });
    }
});

export default router;
