# 🚀 Prateek M. Tripathi - Portfolio

<div align="center">
  
  ![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
  ![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
  ![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

  ### Full Stack Developer | AI Engineer | Agentic AI Specialist
  
  [🌐 Live Demo](your-portfolio-link) • [📧 Email](mailto:prateek1tri2@gmail.com) • [💼 LinkedIn](your-linkedin) • [🐙 GitHub](your-github)

</div>

---

## 📋 Table of Contents
- [About](#-about)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Projects Showcase](#-projects-showcase)
- [Performance Metrics](#-performance-metrics)
- [Contact](#-contact)

---

## 🎯 About

This is my personal portfolio website showcasing my journey as a **Full Stack Developer** and **AI Engineer**. I specialize in building intelligent, scalable web applications with a focus on:

- 🤖 **5+ Agentic AI Systems** built with LangChain & LangGraph
- ⚡ **15+ Modern Tech Skills** spanning MERN, AI/ML, and Cloud
- ☁️ **10+ AWS Services** leveraged for production deployments
- 🎯 **Goal**: Building the Future with AI-powered applications

### What I Do
I craft **intelligent, scalable** web applications, specializing in creating **autonomous agents** with LangGraph and fusing creative frontend experiences with cutting-edge AI.

---

## ✨ Key Features

### 🎨 **Modern UI/UX**
- Sleek dark theme with cyan/teal accents
- Smooth animations and transitions
- Fully responsive design (Mobile, Tablet, Desktop)
- Interactive components with hover effects

### 🧠 **AI-Powered**
- Integrated AI chatbot assistant
- Real-time interaction capabilities
- Smart contact form with email validation

### 🚀 **Performance Optimized**
- Fast loading times with Next.js optimization
- SEO-friendly architecture
- Lazy loading for images and components
- Code splitting for better performance

### 📱 **Responsive Design**
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation

---

## 🛠️ Tech Stack

### **Frontend**
```json
{
  "framework": "Next.js 14+",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "icons": "Lucide React",
  "animations": "Framer Motion"
}
```

### **Backend** (if applicable)
```json
{
  "runtime": "Node.js",
  "framework": "Express.js / FastAPI",
  "database": "MongoDB",
  "authentication": "JWT / NextAuth.js"
}
```

### **AI Integration**
```json
{
  "llm": "OpenAI GPT / Gemini API",
  "framework": "LangChain / LangGraph",
  "vector_db": "Pinecone / ChromaDB"
}
```

### **DevOps & Cloud**
```json
{
  "cloud": "AWS (EC2, S3, CloudFront, Route 53)",
  "containerization": "Docker",
  "ci_cd": "GitHub Actions",
  "hosting": "Vercel / AWS"
}
```

---

## 📁 Folder Structure

```
portfolio/
├── public/                      # Static assets
│   ├── images/                  # Images, icons, logos
│   │   ├── profile.jpg          # Profile picture
│   │   ├── projects/            # Project screenshots
│   │   └── icons/               # SVG icons
│   ├── resume.pdf               # Downloadable CV
│   └── favicon.ico              # Favicon
│
├── src/                         # Source code
│   ├── app/                     # Next.js App Router
│   │   ├── page.tsx             # Home page
│   │   ├── layout.tsx           # Root layout
│   │   ├── about/               # About page
│   │   ├── projects/            # Projects page
│   │   ├── experience/          # Experience page
│   │   └── contact/             # Contact page
│   │
│   ├── components/              # React components
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   └── Sidebar.tsx      # Mobile sidebar
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── Stats.tsx        # Statistics cards
│   │   │   ├── Skills.tsx       # Technical skills
│   │   │   └── FeaturedProjects.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx  # Project card component
│   │   │   ├── ProjectFilter.tsx
│   │   │   └── ProjectModal.tsx
│   │   │
│   │   ├── experience/
│   │   │   ├── Timeline.tsx     # Experience timeline
│   │   │   └── ExperienceCard.tsx
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx  # Contact form
│   │   │   └── SocialLinks.tsx
│   │   │
│   │   └── ui/                  # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── Modal.tsx
│   │
│   ├── lib/                     # Utility functions
│   │   ├── utils.ts             # Helper functions
│   │   ├── constants.ts         # App constants
│   │   └── api.ts               # API calls
│   │
│   ├── styles/                  # Global styles
│   │   └── globals.css          # Tailwind imports
│   │
│   ├── data/                    # Static data
│   │   ├── projects.ts          # Projects data
│   │   ├── skills.ts            # Skills data
│   │   └── experience.ts        # Experience data
│   │
│   └── types/                   # TypeScript types
│       └── index.ts             # Type definitions
│
├── .env.local                   # Environment variables
├── .gitignore                   # Git ignore file
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and **npm**/**yarn**
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Add your environment variables:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_emailjs_public_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open [http://localhost:3000](http://localhost:3000)**

### Build for Production
```bash
npm run build
npm start
```

---

## 💼 Projects Showcase

### 1. 🤖 AI Chatbot with Microservices
**Tech Stack:** React Native, Node.js, FastAPI, LangChain, MongoDB, JWT

- ✅ Polyglot microservices architecture reducing coupling by 40%
- ✅ LangChain RAG pipelines with 92% response accuracy
- ✅ JWT authentication with secure token management

[View Project →](project-link) | [GitHub →](github-link)

---

### 2. 🔄 SkillExchange Platform
**Tech Stack:** Next.js, Node.js, MongoDB, Socket.io, HuggingFace, JWT

- ✅ Real-time chat supporting 1,000+ concurrent users
- ✅ AI-powered semantic skill matching
- ✅ 99.9% uptime with rate limiting

[Live Demo →](live-link) | [GitHub →](github-link)

---

### 3. 💈 Barber Shop Appointment System
**Tech Stack:** Next.js, Node.js, MongoDB, NextAuth.js, EmailJS

- ✅ OAuth integration (Google/GitHub)
- ✅ Dynamic booking slots with real-time availability
- ✅ FAQ chatbot reducing support load by 35%

[Live Demo →](live-link) | [GitHub →](github-link)

---

### 4. 🎙️ Real-time AI Voice Chatbot
**Tech Stack:** Murf AI, AssemblyAI, Gemini API, WebSocket

- ✅ <200ms latency with WebSocket streaming
- ✅ Agentic workflows improving engagement by 30%
- ✅ 25% bandwidth reduction

[View Details →](project-link)

---

## 📊 Performance Metrics

| Metric | Score |
|--------|-------|
| 🎯 Lighthouse Performance | 95+ |
| ♿ Accessibility | 100 |
| 💚 Best Practices | 95+ |
| 🔍 SEO | 100 |
| ⚡ First Contentful Paint | <1.5s |
| 🚀 Time to Interactive | <2.5s |

---

## 🎓 Certifications

- ✅ **React Native Specialization** - Meta (Coursera)
- ✅ **Murf AI Coding Challenge** - Winner
- ✅ **30 Days Voice Agents Challenge** - Murf AI

---

## 📈 GitHub Stats

```
📦 5+ Production Projects
🌟 Active Open Source Contributor
🚀 Specialized in AI-Powered Applications
```

---

## 🎨 Color Palette

```css
/* Primary Colors */
--primary: #06b6d4        /* Cyan */
--primary-dark: #0891b2   /* Darker Cyan */
--accent: #14b8a6         /* Teal */

/* Background */
--bg-dark: #0f172a        /* Dark Blue */
--bg-card: #1e293b        /* Card Background */

/* Text */
--text-primary: #f8fafc   /* White */
--text-secondary: #94a3b8 /* Gray */
```

---

## 📞 Contact

<div align="center">

### Let's Build Something Amazing Together! 🚀

📧 **Email:** [prateek1tri2@gmail.com](mailto:prateek1tri2@gmail.com)  
📱 **Phone:** +91 9336170698  
💼 **LinkedIn:** [Your LinkedIn Profile](your-linkedin)  
🐙 **GitHub:** [Your GitHub Profile](your-github)  
🌐 **Portfolio:** [Live Site](your-portfolio-link)

</div>

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Deployed on [Vercel](https://vercel.com/)

---

## 📌 Future Enhancements

- [ ] Blog section for tech articles
- [ ] Dark/Light theme toggle
- [ ] Multilingual support (Hindi/English)
- [ ] Advanced AI chatbot with voice
- [ ] Analytics dashboard
- [ ] Newsletter subscription

---

<div align="center">
  
  ### ⭐ Star this repo if you like it!
  
  Made with ❤️ by **Prateek M. Tripathi**
  
  ![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=yourusername.portfolio)
  
</div>