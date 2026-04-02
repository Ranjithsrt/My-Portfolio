# My-Portfolio

A modern, full-stack portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). Features a beautiful dark theme with glass morphism UI, smooth animations, and an AI chatbot assistant.

## 🌐 Live Demo

**Frontend**: http://localhost:5174/ (Vite + React)
**Backend API**: http://localhost:5000 (Express + MongoDB)

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Express Rate Limit** - Rate limiting
- **dotenv** - Environment variables

## 📦 Dependencies

### Frontend Dependencies (`frontend/package.json`)

```json
"dependencies": {
  "framer-motion": "^11.15.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.6.0"
}
```

### Frontend Dev Dependencies

```json
"devDependencies": {
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.7"
}
```

### Backend Dependencies (`backend/package.json`)

```json
"dependencies": {
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "express-rate-limit": "^7.5.0",
  "helmet": "^8.0.0",
  "mongoose": "^8.9.5"
}
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Ranjithsrt/My-Portfolio.git
cd My-Portfolio
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

**This installs:**
- react, react-dom, react-icons, framer-motion (production deps)
- vite, tailwindcss, postcss, autoprefixer, @vitejs/plugin-react (dev deps)

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

**This installs:**
- express, mongoose, cors, dotenv, helmet, express-rate-limit

### 4. Environment Setup

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myPortfolio
NODE_ENV=development
```

### 5. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Server runs on: http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
App runs on: http://localhost:5174/

## 📁 Project Structure

```
My-Portfolio/
├── frontend/                 # React + Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── App.jsx          # Main app component
│   │   ├── index.css        # Global styles
│   │   └── main.jsx         # Entry point
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/                  # Express + MongoDB Backend
│   ├── models/
│   │   └── Message.js       # Mongoose model
│   ├── routes/
│   │   └── messages.js      # API routes
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── server.js            # Express server
│
└── README.md
```

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Modern dark UI with glass morphism effects
- **Smooth Animations** - Powered by Framer Motion
- **AI Chatbot** - Interactive assistant for visitor queries
- **Contact Form** - Backend API for message storage in MongoDB
- **Skills Showcase** - Bento grid layout for 16 technologies
- **WhatsApp Integration** - Direct chat button
- **GitHub Projects** - Dynamic project cards

## 🎯 Skills & Technologies

**Frontend:**
- HTML5, CSS3, Bootstrap, Tailwind CSS
- JavaScript (ES6+)
- React, Redux
- jQuery

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- MySQL

**Tools:**
- Git, GitHub
- Postman (API testing)
- NPM (Package management)
- Python

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🔒 Security Features

- Helmet.js for HTTP headers security
- Express Rate Limit for API protection
- CORS configuration for cross-origin requests
- MongoDB injection protection via Mongoose

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Violet)
- **Background**: `#030712` (Dark)
- **Surface**: `#0f172a` (Slate)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#94a3b8`

## 📧 Contact

- **Email**: ranjith201099@gmail.com
- **GitHub**: https://github.com/Ranjithsrt
- **LinkedIn**: https://www.linkedin.com/in/ranjithsrt/
- **WhatsApp**: 8610791655

---

**Built with ❤️ by Ranjith Srt**
