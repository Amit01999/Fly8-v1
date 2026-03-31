# 🚀 Fly8 – International Student Platform

## 🌐 Overview

**Fly8** is a full-stack international student support platform designed to connect **students**, **agencies**, and **institutions** in a unified ecosystem. Inspired by platforms like ApplyBoard and MSM Unify, Fly8 simplifies the global education journey—from discovering programs to managing applications.

The platform is built using the **MERN stack** with modern UI/UX practices and scalable architecture, targeting real-world production readiness.

---

## 🔗 Live Links

- 🌍 Client Website: https://www.fly8.global/
- 🧑‍💻 Dashboard (App): https://app.fly8.global/login
- 📧 Contact: amit.fullstack.webdev@gmail.com

---

## 🏗️ Tech Stack

### Frontend
- React.js / Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP (Scroll Animations)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ORM)

### Authentication & Security
- JWT-based authentication
- Role-based access control (Student, Agency, University, Admin)

### DevOps & Deployment
- Cloud hosting (Vercel / VPS)
- CI/CD pipelines (planned)

---

## 🎯 Core Features

### 👨‍🎓 Student Module
- Search & filter programs globally
- Explore universities and countries
- Apply to programs
- Track application status (Visa Tracker)
- Personalized dashboard

### 🏢 Agency Module
- Manage student applications
- Partner with institutions
- Track commissions and performance

### 🎓 Institution Module
- Add and manage programs
- View incoming applications
- Collaborate with agencies

### 🛠️ Admin Dashboard
- Manage users (Students, Agencies, Universities)
- Program & university moderation
- Analytics and reporting
- System monitoring

---

## 🧩 Key Functional Components

- Course Finder Engine (advanced filtering)
- Dynamic Program Management (1400+ programs)
- Unified Authentication System (multi-role user model)
- Modern UI/UX (glassmorphism, animations, responsive design)

---

## 📁 Project Structure
Fly8/
Fly8/
│
├── client/                 # Frontend (React / Next.js)
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── utils/
│
├── server/                 # Backend (Node.js / Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
├── config/                 # Environment & DB configs
├── public/                 # Static assets
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
## 2. Install Dependencies

### Client
```bash
cd client
npm install
Server
cd ../server
npm install
3. Environment Variables

Create a .env file inside the server/ directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:3000
4. Run the Application
Start Backend
npm run dev
Start Frontend
cd client
npm run dev
📊 Scalability & Architecture
Modular MVC architecture
MongoDB indexing for large-scale queries
Role-based multi-user system (single model with sub-schemas)
API-first backend design
Ready for microservices evolution
🔒 Security
JWT authentication
Protected API routes
Role-based authorization
Input validation & sanitization
Secure environment configuration
🚀 Future Roadmap
🤖 AI-powered course recommendations
📊 Advanced analytics dashboard
🌍 Multi-language support
🐳 Docker & Kubernetes deployment
📱 Mobile application (React Native)
👨‍💻 Author

Amit Kumar
Full Stack MERN Developer

📧 amit.fullstack.webdev@gmail.com

📄 License

This project is licensed under the MIT License.

⭐ Final Note

Fly8 is a production-grade platform in progress, built with scalability, performance, and real-world usability in mind. It aims to streamline the international education ecosystem through modern engineering practices.
