# 🚀 Modern Full-Stack Portfolio

Welcome to my personal portfolio project! This is a complete, ready-to-use website designed to showcase your skills, projects, and personality with a stunning, professional look.

### **✨ See it in Action**
Imagine a website that feels alive—smooth animations as you scroll, a sleek dark theme that's easy on the eyes, and a helpful AI chatbot ready to answer visitor questions. **That's what this is.**

---

## 🧐 What is this?
If you're a developer (or aspiring to be one), you need a place to show off your work. This project provides:
- **A Beautiful Front-End**: What the visitors see (Interactive, responsive, and animated).
- **A Solid Back-End**: The "brain" of the site that handles contact messages and data.
- **A Database**: Where all your information and visitor messages are safely stored.

---

## 🛠 What's Under the Hood? (The "MERN" Stack)
Don't let the technical terms scare you! Here's a simple breakdown of the tools used:

| Tool | Role | Why we use it? |
| :--- | :--- | :--- |
| **MongoDB** | Database | To store messages from your "Contact Me" form. |
| **Express** | Back-End Framework | The bridge between your website and the database. |
| **React** | Front-End Library | To build a fast, interactive user interface. |
| **Node.js** | Environment | The foundation that lets the back-end run on your computer. |

**Extra Magic:**
- **Tailwind CSS**: For easy styling without writing messy CSS files.
- **Framer Motion**: For those smooth, "wow" animations.

---

## 🚀 Getting Started (Step-by-Step)

Follow these steps to get your own version running locally!

### **1. Prerequisites**
Before you start, make sure you have these installed on your computer:
- [Node.js](https://nodejs.org/) (Version 18 or higher)
- [Git](https://git-scm.com/) (For copying the code)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (To store your data)

### **2. Copy the Project**
Open your terminal (Command Prompt, PowerShell, or Terminal) and run:
```bash
git clone https://github.com/Ranjithsrt/My-Portfolio.git
cd My-Portfolio
```

### **3. Install the Tools**
The project has two parts: the **frontend** (what people see) and the **backend** (the brain). You need to install the tools for both.

**For the Backend:**
```bash
cd backend
npm install
```

**For the Frontend:**
```bash
cd ../frontend
npm install
```

### **4. Setup Your "Secret" Settings**
In the `backend` folder, find or create a file named `.env`. This is where you keep secret settings. Copy and paste this inside:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myPortfolio
NODE_ENV=development
```

---

## 🏃‍♂️ How to Run it!
To see the project, you need to start **two** terminals at the same time:

**Terminal 1 (The Brain):**
```bash
cd backend
npm run dev
```

**Terminal 2 (The Face):**
```bash
cd frontend
npm run dev
```

> [!TIP]
> Once both are running, open your browser and go to: **[http://localhost:5173](http://localhost:5173)**

---

## 🎨 Make it Your Own! (Customization Guide)

Ready to put your name on it? Here is what to change:

1.  **Your Name & Title**: Open `frontend/src/App.jsx` and look for "Ranjith Srt". Replace it with your name!
2.  **Social Links**: Also in `App.jsx`, look for GitHub and LinkedIn links. Swap them with your own URLs.
3.  **About Me**: Edit the text in the `About` component within `App.jsx` to tell your story.

---

## 📁 Project Structure (Simplified)
```text
Portfolio/
├── frontend/        # Everything the user sees (React components, styles)
│   └── src/
│       └── App.jsx  # ⬅️ This is where most of your content lives!
├── backend/         # The server and database logic
│   └── server.js    # ⬅️ The main entry point for the back-end
└── README.md        # You are here!
```

---

## 🔒 API Endpoints (For Advanced Users)

If you want to test the connection manually (e.g., using Postman), use these:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/health` | Check if the server and database are okay. |
| **POST** | `/api/messages` | Send a new contact message. |
| **GET** | `/api/messages` | View all messages (Admin). |

---

## ⚠️ Troubleshooting
- **Website not loading?** Make sure MongoDB is installed and running on your computer.
- **Port Error?** If it says "Port 5000 is already in use," try closing other terminals or restart your computer.
- **Commands not working?** Double-check that you installed **Node.js** correctly.

---

**Built with ❤️ for the Developer Community by Ranjith Srt.**
