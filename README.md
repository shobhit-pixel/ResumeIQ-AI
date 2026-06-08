ResumeIQ AI

🚀 AI-Powered ATS Resume Analyzer built using React.js, Node.js, Express.js, Tailwind CSS, and PDF Parsing.

ResumeIQ AI helps users analyze their resumes, calculate ATS scores, identify missing skills, evaluate resume strength, and receive personalized recommendations to improve their chances of getting shortlisted by recruiters.

---

📌 Features

Resume Upload

- Upload PDF resumes
- Drag & Drop support
- Secure file handling

Resume Analysis

- PDF text extraction
- Technical skill detection
- ATS score calculation
- Resume strength evaluation

Skill Gap Analysis

- Skills found in resume
- Missing skills detection
- Industry-relevant recommendations

AI Suggestions

- Personalized resume improvement tips
- Career-focused recommendations
- Resume optimization insights

Job Match Analysis

- Frontend Developer Match
- React Developer Match
- Full Stack Developer Match
- Backend Developer Match

User Experience

- Modern responsive dashboard
- Interactive visual cards
- Loading animation during analysis
- Mobile-friendly design



---

🛠️ Tech Stack

Frontend

- React.js
- Tailwind CSS
- Axios
- Framer Motion
- Vite

Backend

- Node.js
- Express.js
- Multer
- PDF-Parse

Development Tools

- VS Code
- Git
- GitHub

---

🏗️ Project Architecture

PDF Resume
      │
      ▼
Upload Resume
      │
      ▼
PDF Parsing
      │
      ▼
Text Extraction
      │
      ▼
Skill Detection
      │
      ▼
ATS Score Engine
      │
      ▼
Missing Skills Analysis
      │
      ▼
AI Suggestions
      │
      ▼
Job Match Analysis
      │
      ▼
Interactive Dashboard

---

⚡ Installation Guide

Clone Repository

git clone https://github.com/shobhit-pixel/ResumeIQ-AI.git

cd ResumeIQ-AI

---

Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173

---

Backend Setup

Open another terminal:

cd backend

npm install

npm run dev

Backend runs on:

http://localhost:5000

---


## 📂 Project Structure

```text
ResumeIQ-AI
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── UploadCard.jsx
│   │   │   ├── ATSResult.jsx
│   │   │   └── StrengthMeter.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
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
│   └── server.js
│
├── screenshots
├── README.md
└── .gitignore
```
---

🎯 ATS Features

ATS Score

Calculates resume score based on:

- Technical skills
- Keyword coverage
- Skill completeness

---

Resume Strength

Categories:

Score| Rating
80+| Excellent
60-79| Good
Below 60| Needs Improvement

---

Skills Analysis

Example:

Skills Found:
HTML
CSS
JavaScript
React
PHP
MySQL

Missing Skills:
TypeScript
Redux
Tailwind CSS
Node.js
MongoDB

---

Job Match Analysis

Example:

Frontend Developer     95%
React Developer        90%
Full Stack Developer   75%
Backend Developer      60%

---

🚀 Future Enhancements

- Google Gemini AI Integration
- Resume PDF Preview
- User Authentication
- Resume History Tracking
- Advanced ATS Engine
- Export ATS Report
- Interview Question Generator
- AI Resume Rewriter

---

📈 Resume Highlights

ResumeIQ AI demonstrates:

- Frontend Development
- Backend Development
- REST APIs
- File Handling
- PDF Processing
- Data Analysis
- ATS Logic Implementation
- Dashboard Development
- Responsive UI Design

---

👨‍💻 Author

Shobhit Tripathi

Frontend Developer | React.js Developer | Web Developer

GitHub:
https://github.com/shobhit-pixel

LinkedIn:
https://linkedin.com/in/shobhit-k-tripathi

