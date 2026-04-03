import app from '../server.js';

// Vercel serverless handler
export default async function handler(req, res) {
  // Set environment for serverless
  process.env.NODE_ENV = 'production';
  
  // Return the Express app handler
  return app(req, res);
}
