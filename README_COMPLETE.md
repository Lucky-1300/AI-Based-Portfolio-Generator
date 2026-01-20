# 🎨 AI-Based Portfolio Generator

> **Create stunning, professional portfolio websites in minutes with AI-powered content enhancement**

[![Status](https://img.shields.io/badge/Status-Production%20Ready-success)](https://github.com)
[![Features](https://img.shields.io/badge/Features-10%2F10%20Complete-brightgreen)](https://github.com)
[![Frontend](https://img.shields.io/badge/Frontend-React%2018-blue)](https://reactjs.org/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org/)

---

## 🌟 What Is This?

A complete, production-ready AI portfolio generator that helps developers, designers, and professionals create beautiful portfolio websites automatically. No coding required!

### ✨ Key Highlights

- 🤖 **AI-Powered** - Smart content enhancement using OpenAI GPT-3.5
- 🎨 **4 Professional Themes** - Minimal, Modern, Professional, Creative
- 📥 **3 Export Formats** - HTML, React, PDF
- ⚡ **Real-time Preview** - See changes instantly
- 💾 **Auto-Save** - Never lose your work
- 🎯 **Smart Validation** - Helpful suggestions and error checking

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd AI-Based-Portfolio-Generator

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Running Locally

```bash
# Terminal 1: Start Frontend (Port 5173)
cd frontend
npm run dev

# Terminal 2: Start Backend (Port 5000)
cd backend
npm run dev
```

Visit: `http://localhost:5173`

---

## 📚 Documentation

- **[Quick Start Guide](QUICK_START.md)** - Get started in 5 minutes
- **[Implementation Summary](IMPLEMENTATION_SUMMARY.md)** - Complete technical documentation
- **[Features Showcase](FEATURES_SHOWCASE.md)** - Visual feature demonstrations

---

## 🎯 Core Features

### 1. Portfolio Builder
Multi-step form wizard to collect your information:
- 👤 **Personal Info** - Name, email, bio, social links
- ⚡ **Skills** - Auto-categorized technical and soft skills
- 💼 **Experience** - Work history with AI-enhanced descriptions
- 🚀 **Projects** - Showcase your work with tech stacks

### 2. AI Content Enhancement
One-click professional content improvement:
```javascript
Before: "I am a developer"
After: "Experienced software developer with a proven track 
       record of delivering scalable web applications..."
```

### 3. Theme System
Choose from 4 beautiful themes:
- **Minimal** - Clean and simple
- **Modern** - Contemporary with gradients (Default)
- **Professional** - Corporate blue tones
- **Creative** - Bold and expressive

### 4. Export Options

| Format | Description | Best For |
|--------|-------------|----------|
| 🌐 **HTML** | Standalone file | Quick sharing |
| ⚛️ **React** | Full project | Customization |
| 📄 **PDF** | Print-ready | Job applications |

### 5. Smart Features
- ✅ Real-time validation
- ✅ Auto-save to localStorage
- ✅ Completion tracking (%)
- ✅ Skill auto-categorization
- ✅ Live preview
- ✅ Export validation

---

## 🏗️ Tech Stack

### Frontend
- **React 18.2** - UI framework
- **Vite 5.0** - Build tool & dev server
- **Tailwind CSS 3.4** - Utility-first styling
- **React Router 7.12** - Client-side routing
- **Axios** - HTTP requests

### Backend
- **Node.js / Express** - REST API
- **OpenAI API** - AI content enhancement
- **MongoDB** - Optional data persistence

### Services & Architecture
- **Context API** - State management
- **Service Layer** - Business logic separation
- **Component Library** - Reusable UI components

---

## 📁 Project Structure

```
AI-Based-Portfolio-Generator/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/          # Reusable UI components
│   │   │   ├── form/            # Form components
│   │   │   ├── preview/         # Preview components
│   │   │   └── ExportPortfolio.jsx
│   │   ├── context/             # React Context providers
│   │   ├── hooks/               # Custom React hooks
│   │   ├── pages/               # Page components
│   │   ├── services/            # Business logic
│   │   │   ├── contentEnhancementService.js
│   │   │   ├── themeService.js
│   │   │   ├── htmlExportService.js
│   │   │   ├── reactExportService.js
│   │   │   ├── pdfExportService.js
│   │   │   └── exportIntegrationService.js
│   │   ├── utils/               # Utilities
│   │   │   └── portfolioSchema.js
│   │   └── styles/              # Global styles
│   └── package.json
├── backend/
│   ├── controllers/             # Request handlers
│   ├── services/                # AI engine & logic
│   ├── routes/                  # API routes
│   ├── middleware/              # Express middleware
│   ├── models/                  # Data models
│   └── utils/                   # Helper functions
└── docs/                        # Documentation
```

---

## 🎨 Usage Examples

### Creating a Portfolio

```javascript
// 1. Fill out the Builder form
// Auto-saves to localStorage

// 2. Enhance content with AI
import { enhanceSummary } from './services/contentEnhancementService';
const enhanced = await enhanceSummary(myBio);

// 3. Apply a theme
import { getThemeConfig, applyTheme } from './services/themeService';
const theme = getThemeConfig('modern', 'dark');
applyTheme(theme);

// 4. Export your portfolio
import { exportPortfolio } from './services/exportIntegrationService';
await exportPortfolio(portfolioData, 'html', 'portfolio.html');
```

### Using Backend API

```bash
# Enhance content
curl -X POST http://localhost:5000/api/ai/enhance \
  -H "Content-Type: application/json" \
  -d '{"type":"bio","content":"I am a developer"}'

# Get suggestions
curl -X POST http://localhost:5000/api/ai/suggest \
  -H "Content-Type: application/json" \
  -d '{"personalInfo":{"fullName":"John"},"skills":[]}'

# Validate portfolio
curl -X POST http://localhost:5000/api/ai/validate \
  -H "Content-Type: application/json" \
  -d '{"personalInfo":{"fullName":"John","email":"john@example.com"}}'
```

---

## ⚙️ Configuration

### Environment Variables

Create `.env` file in backend:

```env
# OpenAI API (optional but recommended)
OPENAI_API_KEY=sk-your-api-key-here

# Server Configuration
PORT=5000
NODE_ENV=development

# Database (optional)
MONGODB_URI=mongodb://localhost:27017/portfolio

# CORS
CORS_ORIGIN=http://localhost:5173
```

### Theme Customization

Edit `/frontend/src/utils/portfolioSchema.js`:

```javascript
export const THEME_CONFIGURATIONS = {
  myCustomTheme: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      // ... more colors
    },
    fonts: {
      heading: 'Your Font',
      body: 'Your Font'
    }
  }
};
```

---

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test

# E2E tests
npm run test:e2e
```

---

## 🚢 Deployment

### Frontend (Netlify/Vercel)

```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway)

```bash
cd backend
# Add Procfile: web: node server.js
git push heroku main
```

---

## 📊 Features Completion

| Feature | Status | Files |
|---------|--------|-------|
| Portfolio Schema | ✅ | `portfolioSchema.js` |
| Content Enhancement | ✅ | `contentEnhancementService.js` |
| Theme System | ✅ | `themeService.js` |
| HTML Export | ✅ | `htmlExportService.js` |
| React Export | ✅ | `reactExportService.js` |
| PDF Export | ✅ | `pdfExportService.js` |
| Form Validation | ✅ | `PersonalInfoForm.jsx`, `SkillsForm.jsx` |
| Theme Switcher | ✅ | `ThemeSwitcher.jsx` |
| Export UI | ✅ | `ExportPortfolio.jsx` |
| Builder Integration | ✅ | `Builder.jsx` |
| Backend AI | ✅ | `aiEngine.js`, `aiController.js` |

**Progress: 100% Complete** ✅

---

## 🎯 API Endpoints

### AI Enhancement

```
POST /api/ai/enhance
POST /api/ai/enhance-batch
POST /api/ai/suggest
POST /api/ai/validate
POST /api/ai/optimize-prompt
```

### Portfolio Management

```
GET    /api/portfolio/:id
POST   /api/portfolio
PUT    /api/portfolio/:id
DELETE /api/portfolio/:id
```

### Export

```
POST /api/export/html
POST /api/export/react
POST /api/export/pdf
```

---

## 💡 Tips & Best Practices

### For Users

1. **Complete Your Profile** - Aim for 80%+ completion
2. **Use AI Enhancement** - Make content professional
3. **Add Metrics** - Quantify achievements (e.g., "Increased performance by 40%")
4. **Choose Right Theme** - Match your industry
5. **Preview Before Export** - Check all sections

### For Developers

1. **Handle API Failures** - Provide fallbacks
2. **Validate Input** - Both client and server
3. **Cache Responses** - Reduce API costs
4. **Test Exports** - Cross-browser compatibility
5. **Monitor Performance** - Optimize large exports

---

## 🐛 Troubleshooting

### Issue: AI Enhancement Not Working

**Solution**: Check if `OPENAI_API_KEY` is set. If not, local fallback enhancement still works!

### Issue: Export Button Disabled

**Solution**: Ensure required fields (name, email) are filled. Check validation errors in export modal.

### Issue: Theme Not Persisting

**Solution**: Theme is saved to localStorage. Check browser settings allow localStorage.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📜 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 🙏 Acknowledgments

- **OpenAI** - GPT-3.5 API for content enhancement
- **React Team** - Amazing UI framework
- **Tailwind CSS** - Beautiful utility-first CSS
- **Vite** - Lightning-fast build tool

---

## 📞 Support

- 📧 Email: support@example.com
- 💬 Discord: [Join our community](#)
- 📖 Docs: [Full Documentation](IMPLEMENTATION_SUMMARY.md)

---

## 🗺️ Roadmap

- [ ] Multi-language support (i18n)
- [ ] Template gallery
- [ ] Resume parser (import from existing resume)
- [ ] Analytics dashboard
- [ ] Custom domains
- [ ] Collaboration features
- [ ] Mobile app

---

## 📈 Stats

- **Lines of Code**: ~15,000
- **Components**: 25+
- **Services**: 8
- **API Endpoints**: 10+
- **Themes**: 4
- **Export Formats**: 3

---

## ⭐ Star History

If you find this project helpful, please give it a star! ⭐

---

## 🎉 Ready to Build!

**Everything is implemented and working. Start creating amazing portfolios now!**

```bash
npm run dev
```

Visit `http://localhost:5173` and create your first portfolio! 🚀

---

Made with ❤️ by the NavGurukul Team
