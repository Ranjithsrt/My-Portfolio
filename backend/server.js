import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db.js';
import messageRoutes from './routes/messages.js';
import chatRoutes from './routes/chat.js';


dotenv.config();

const app = express();

// Security: Helmet middleware for security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Security: Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Stricter rate limit for message endpoint
const messageLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // 10 messages per hour per IP
  message: 'Too many messages sent, please try again later.',
});
app.use('/api/messages', messageLimiter);

// CORS configuration
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://my-portfolio-eight-ruddy-44.vercel.app', 'https://*.vercel.app', process.env.FRONTEND_URL].filter(Boolean)
        : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging in development
if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
        next();
    });
}

// Trust proxy configuration for accurate IP behind reverse proxy
app.set('trust proxy', process.env.NODE_ENV === 'production' ? 1 : 0);


// API Routes
app.use('/api/messages', messageRoutes);
app.use('/api/chat', chatRoutes);


// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString(),
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Root route - API documentation
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Portfolio Backend API',
        version: '1.0.0',
        endpoints: {
            health: {
                method: 'GET',
                url: '/api/health',
                description: 'Check server and database status'
            },
            messages: {
                submit: {
                    method: 'POST',
                    url: '/api/messages',
                    description: 'Submit a contact message',
                    body: {
                        name: 'string (required)',
                        email: 'string (required)',
                        subject: 'string (required)',
                        message: 'string (required)'
                    }
                },
                getAll: {
                    method: 'GET',
                    url: '/api/messages',
                    description: 'Get all messages (admin only)'
                },
                getOne: {
                    method: 'GET',
                    url: '/api/messages/:id',
                    description: 'Get single message by ID'
                },
                delete: {
                    method: 'DELETE',
                    url: '/api/messages/:id',
                    description: 'Delete message by ID'
                }
            }
        },
        documentation: 'https://github.com/Ranjithsrt/My-Portfolio#api-endpoints'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found',
        availableRoutes: [
            'GET /',
            'GET /api/health',
            'POST /api/messages',
            'GET /api/messages',
            'GET /api/messages/:id',
            'DELETE /api/messages/:id'
        ]
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Global Error:', err);
    
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            success: false,
            error: 'Invalid JSON payload'
        });
    }

    res.status(err.status || 500).json({
        success: false,
        error: process.env.NODE_ENV === 'production' 
            ? 'Internal server error' 
            : err.message || 'Something went wrong!'
    });
});

// Connect to database and start server (only in non-serverless environments)
const PORT = process.env.PORT || 5000;

// Only start the server if we're not in a serverless environment (Vercel)
if (process.env.VERCEL !== '1') {
  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err.message);
    console.log('Shutting down gracefully...');
    server.close(() => process.exit(1));
  });

  // Handle uncaught exceptions
  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    console.log('Shutting down...');
    process.exit(1);
  });

  // Connect to DB then start server
  connectDB().then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  });
} else {
  // Serverless mode: just connect to DB
  connectDB().catch(err => console.error('Database connection failed:', err));
}

export default app;
