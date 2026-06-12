# 🚀 ResumeIQ AI

An AI-inspired ATS Resume Analyzer that helps students, job seekers, and professionals evaluate and improve their resumes through automated analysis.

ResumeIQ AI extracts text from PDF resumes, analyzes skills, calculates ATS scores, identifies missing technologies, provides personalized recommendations, and matches resumes with suitable job roles.

---

## 🌐 Live Demo

**Live Website:**
https://resume-iq-ai-gamma.vercel.app/

**GitHub Repository:**
https://github.com/shobhit-pixel/ResumeIQ-AI

---

## ✨ Features

### 📄 Resume Upload

* Upload PDF resumes
* Drag & Drop support
* Secure file handling
* Real-time processing

### 🎯 ATS Score Analysis

ResumeIQ AI evaluates resumes and generates an ATS compatibility score based on:

* Technical skills
* Keyword coverage
* Skill completeness
* Industry relevance

### 💪 Resume Strength Meter

Visual progress bar showing overall resume quality.

Categories:

| Score    | Rating            |
| -------- | ----------------- |
| 80+      | Excellent         |
| 60-79    | Good              |
| Below 60 | Needs Improvement |

### 🛠 Skills Detection

Automatically extracts skills from resumes.

Examples:

* HTML
* CSS
* JavaScript
* React
* Node.js
* Express.js
* MongoDB
* MySQL
* Python
* Git
* GitHub
* Bootstrap

### ❌ Missing Skills Detection

Identifies important technologies not present in the resume.

Examples:

* TypeScript
* Redux
* Tailwind CSS
* Next.js
* Express.js
* MongoDB

### 🤖 AI Suggestions

Generates improvement recommendations based on missing skills.

Examples:

* Add TypeScript to improve frontend opportunities
* Learn Node.js for full-stack roles
* Add MongoDB projects to strengthen backend profile

### 📊 Job Match Analysis

Analyzes resume skills and predicts compatibility with common roles.

Examples:

| Role                 | Match |
| -------------------- | ----- |
| Frontend Developer   | 95%   |
| React Developer      | 90%   |
| Full Stack Developer | 75%   |
| Backend Developer    | 60%   |

### 📱 Responsive Design

* Desktop optimized
* Tablet friendly
* Mobile responsive

---

## 🏗 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Framer Motion
* Axios

### Backend

* Node.js
* Express.js
* Multer
* PDF-Parse

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```text
ResumeIQ-AI
│
├── frontend
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── UploadCard.jsx
│   │   │   ├── ATSResult.jsx
│   │   │   ├── StrengthMeter.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
│   │
│   ├── controllers
│   │   └── resumeController.js
│   │
│   ├── routes
│   │   └── uploadRoutes.js
│   │
│   ├── services
│   │   ├── pdfService.js
│   │   ├── skillExtractor.js
│   │   └── atsScore.js
│   │
│   ├── uploads
│   │
│   └── server.js
│
├── screenshots
│   └── home.jpg
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/shobhit-pixel/ResumeIQ-AI.git
```

```bash
cd ResumeIQ-AI
```

---

## Frontend Setup

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

Open a second terminal:

```bash
cd backend
```

```bash
npm install
```

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## API Endpoint

### Upload Resume

```http
POST /api/upload
```

Form Data:

```text
resume : PDF File
```

Response:

```json
{
  "success": true,
  "atsScore": 83,
  "skills": [
    "html",
    "css",
    "javascript",
    "react"
  ],
  "missingSkills": [
    "typescript",
    "redux",
    "tailwind"
  ]
}
```

---

## Workflow

```text
Upload Resume
      ↓
PDF Parsing
      ↓
Text Extraction
      ↓
Skill Detection
      ↓
ATS Score Calculation
      ↓
Missing Skills Analysis
      ↓
AI Suggestions
      ↓
Job Match Prediction
      ↓
Dashboard Output
```

---

## Future Enhancements

### Gemini AI Integration

* AI Resume Review
* AI Resume Rewriting
* AI Career Guidance

### Additional Features

* User Authentication
* Resume History Tracking
* Resume PDF Preview
* Export ATS Reports
* AI Interview Question Generator
* Resume Comparison Tool
* Advanced ATS Engine

---

## Learning Outcomes

This project helped in learning:

* React.js Components
* State Management
* File Upload Handling
* REST APIs
* Express.js Routing
* PDF Processing
* Responsive Design
* ATS Resume Analysis Concepts
* Full Stack Development

---

## 👨‍💻 Developer

### Shobhit Tripathi

Frontend Developer | React.js Developer

GitHub: https://github.com/shobhit-pixel

LinkedIn: https://in.linkedin.com/in/shobhit-k-tripathi

Email: [formailshobhit@gmail.com](mailto:formailshobhit@gmail.com)


---

## ⭐ Support

If you found this project helpful:

⭐ Star the repository

🍴 Fork the project

📢 Share it with others

---

**Built with React.js, Node.js, Express.js, Tailwind CSS & AI**
