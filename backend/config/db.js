import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myPortfolio', {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
        conn.connection.on('error', (err) => {
            console.error(`MongoDB connection error: ${err.message}`);
        });

        conn.connection.on('disconnected', () => {
            console.warn('MongoDB disconnected. Attempting to reconnect...');
        });

        conn.connection.on('reconnected', () => {
            console.log('MongoDB reconnected successfully');
        });

    } catch (error) {
        console.error(`Database Connection Failed: ${error.message}`);
        if (error.name === 'MongoServerError') {
            console.error('MongoDB Server Error - Check if MongoDB is running');
        } else if (error.name === 'MongooseServerSelectionError') {
            console.error('Could not connect to MongoDB server - Check your connection string');
        }
        process.exit(1);
    }
};

export default connectDB;
