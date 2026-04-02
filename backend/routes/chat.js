import express from 'express';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Stricter rate limit for AI Chat to prevent abuse
const chatLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 20, // 20 messages per hour per IP
    message: { success: false, error: 'Chat limit reached. Please try again in an hour.' }
});

// Knowledge base for the Smart Mock
const knowledgeBase = {
    skills: {
        keywords: ['skill', 'tech', 'stack', 'know', 'language', 'tool', 'experience', 'expert'],
        response: "Ranjith is a versatile MERN Stack Developer with expertise in React, Node.js, Express, and MongoDB. He also has strong experience with Tailwind CSS, Git, and RESTful APIs, and keeps exploring new technologies to build modern solutions."
    },
    projects: {
        keywords: ['project', 'work', 'build', 'create', 'portfolio', 'application', 'site'],
        response: "Ranjith has built several exciting full-stack projects, including a Bookstore Application (MERN), personal portfolios, and various mini-projects. You can check his featured work in the Projects section of this site!"
    },
    bio: {
        keywords: ['who', 'about', 'background', 'person', 'ranjith'],
        response: "Ranjith is a dedicated developer who loves turning complex problems into simple, beautiful, and intuitive designs. He specializes in creating scalable web applications and follows clean code practices."
    },
    contact: {
        keywords: ['contact', 'hire', 'email', 'reach', 'message', 'available', 'touch', 'whatsapp', 'linkedin'],
        response: "Ranjith is currently open to new opportunities! You can reach him via the contact form on this page, email (ranjith201099@gmail.com), or LinkedIn. He's also available on WhatsApp for a quick chat!"
    },
};

// POST /api/chat
router.post('/', chatLimiter, async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || message.trim() === '') {
            return res.status(400).json({ success: false, error: 'No message provided' });
        }

        const q = message.toLowerCase();
        let finalResponse = "That's a great question! I'm here to help with anything related to Ranjith's skills, projects, or professional background. Feel free to ask more!";

        // Smart selection based on keywords
        for (const category in knowledgeBase) {
            if (knowledgeBase[category].keywords.some(kw => q.includes(kw))) {
                finalResponse = knowledgeBase[category].response;
                break;
            }
        }

        // Generic friendly responses
        if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
            finalResponse = "Hello! 👋 I'm Ranjith's AI Assistant. How can I help you learn more about his work today?";
        } else if (q.includes('thank')) {
            finalResponse = "You're very welcome! Let me know if there's anything else you'd like to know about Ranjith.";
        }

        // Simulate a tiny delay for "thinking"
        setTimeout(() => {
            res.json({
                success: true,
                response: finalResponse,
                timestamp: new Date().toISOString()
            });
        }, 500);

    } catch (error) {
        console.error('Chat Error:', error);
        res.status(500).json({ success: false, error: 'Unexpected error, please try again.' });
    }
});

export default router;
