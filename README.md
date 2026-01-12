# 🎨 AI-Based Portfolio Generator

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.0-green.svg)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue.svg)](https://github.com/features/actions)

> **An AI-powered platform for generating professional portfolios with smart content enhancement, multiple export formats, and beautiful customizable themes.**

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Support](#support)

## ✨ Features

### Core Functionality
- 🚀 **Portfolio Creation**: Intuitive builder for creating professional portfolios
- 🤖 **AI Enhancement**: GPT-powered content suggestions and improvements
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🎨 **Theme Customization**: Multiple pre-built themes (Modern, Minimal, Classic)
- 🔄 **Multi-Export**: Export as PDF, HTML, or React components
- 🔐 **Secure Authentication**: JWT-based user authentication
- 📊 **Analytics Ready**: Built-in analytics integration
- ⚡ **Performance**: Optimized for speed with caching and compression

### AI Features
- ✍️ **Experience Description Enhancement**: AI-powered suggestions for professional descriptions
- 💡 **Summary Generation**: Automatic professional summary creation
- 🏷️ **Skill Optimization**: Smart skill categorization and matching
- 🎯 **ATS Optimization**: Content optimized for Applicant Tracking Systems
- 🔄 **Multiple Suggestions**: Get alternative phrasings and improvements

### Export Options
- 📄 **PDF Export**: Print-ready portfolios with multiple templates
- 🌐 **HTML Export**: Self-hosted static portfolios
- ⚛️ **React Component**: Integration-ready React components

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB 5.0
- **Authentication**: JWT
- **AI**: OpenAI API (GPT-3.5+)
- **File Storage**: AWS S3 (optional) or local storage
- **Caching**: Redis

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **UI Components**: React custom components
- **State Management**: Context API
- **Styling**: CSS3, Tailwind CSS
- **HTTP Client**: Axios

### DevOps & Deployment
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx
- **CI/CD**: GitHub Actions
- **Monitoring**: Integrated logging
- **SSL/TLS**: Let's Encrypt support

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- **MongoDB**: v5.0 or higher
- **Docker**: v20.0+ (for containerized deployment)
- **Git**: v2.30+

### Optional
- **OpenAI API Key**: For AI enhancement features
- **AWS Account**: For S3 file storage
- **Redis**: For caching (optional but recommended)

## 🚀 Quick Start

### Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/yourusername/AI-Based-Portfolio-Generator.git
cd AI-Based-Portfolio-Generator

# Copy environment template
cp deployment/.env.example .env

# Edit .env with your configuration
nano .env

# Start all services
docker-compose -f deployment/docker-compose.yml up -d

# View logs
docker-compose logs -f

# Access the application
# Frontend: http://localhost:3000
# API: http://localhost:5000/api
# Database: localhost:27017
```

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/AI-Based-Portfolio-Generator.git
cd AI-Based-Portfolio-Generator

# Backend Setup
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev

# Frontend Setup (in another terminal)
cd frontend
npm install
cp .env.local.example .env.local
# Edit .env.local if needed
npm run dev

# Access the application
# Frontend: http://localhost:5173
# API: http://localhost:5000
```

## 📂 Project Structure

```
AI-Based-Portfolio-Generator/
├── backend/                          # Node.js/Express backend
│   ├── controllers/                  # Request handlers
│   │   ├── aiController.js          # AI enhancement endpoints
│   │   ├── exportController.js      # Export functionality
│   │   └── portfolioController.js   # Portfolio CRUD operations
│   ├── models/                      # Database schemas
│   │   └── Portfolio.js            # Portfolio model
│   ├── routes/                      # API routes
│   │   ├── aiRoutes.js
│   │   ├── exportRoutes.js
│   │   └── portfolioRoutes.js
│   ├── services/                    # Business logic
│   │   ├── aiEngine.js             # AI integration
│   │   ├── contentFormatter.js     # Content processing
│   │   ├── pdfGenerator.js         # PDF export
│   │   └── promptOptimizer.js      # Prompt optimization
│   ├── middleware/                  # Express middleware
│   │   ├── authMiddleware.js       # JWT authentication
│   │   ├── errorHandler.js         # Error handling
│   │   └── rateLimiter.js          # Rate limiting
│   ├── utils/                       # Utility functions
│   │   ├── logger.js
│   │   ├── responseHandler.js
│   │   └── validators.js
│   ├── server.js                   # Express app setup
│   └── package.json
│
├── frontend/                         # React application
│   ├── src/
│   │   ├── components/             # Reusable React components
│   │   │   ├── common/            # Common UI components
│   │   │   ├── form/              # Form components
│   │   │   ├── preview/           # Preview components
│   │   │   └── export/            # Export components
│   │   ├── pages/                 # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Builder.jsx
│   │   │   ├── Preview.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── context/               # React Context
│   │   │   ├── PortfolioContext.jsx
│   │   │   ├── ThemeContext.jsx
│   │   │   └── UserContext.jsx
│   │   ├── hooks/                 # Custom React hooks
│   │   │   ├── useAIEnhancer.jsx
│   │   │   ├── usePreview.jsx
│   │   │   └── useTheme.jsx
│   │   ├── services/              # API services
│   │   │   ├── apiClient.js
│   │   │   ├── aiService.js
│   │   │   └── exportService.js
│   │   ├── styles/                # CSS files
│   │   ├── utils/                 # Utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/                    # Static files
│   └── package.json
│
├── templates/                        # Export templates
│   ├── html/                       # HTML templates
│   │   ├── classic/
│   │   ├── minimal/
│   │   └── modern/
│   ├── pdf/                        # PDF templates
│   └── react/                      # React component templates
│
├── deployment/                       # Deployment configuration
│   ├── ci-cd.yml                   # GitHub Actions workflow
│   ├── docker/
│   │   └── Dockerfile             # Multi-stage Docker build
│   ├── nginx/
│   │   └── nginx.conf             # Nginx configuration
│   ├── docker-compose.yml         # Services orchestration
│   ├── .env.example               # Environment template
│   └── README.md                  # Deployment guide
│
├── docs/                            # Documentation
│   ├── api-documentation.md       # API reference
│   ├── user-manual.md             # User guide
│   ├── evaluation-rubric.md       # Evaluation criteria
│   └── deployment.md              # Deployment guide
│
├── tests/                           # Test files
│   ├── backend/
│   ├── frontend/
│   └── ai/
│
├── .gitignore
├── .env.example
├── package.json
└── README.md
```

## 💻 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/AI-Based-Portfolio-Generator.git
cd AI-Based-Portfolio-Generator
```

### Step 2: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add:
# - MONGODB_URI=mongodb://localhost:27017/portfolio
# - JWT_SECRET=your-secret-key
# - OPENAI_API_KEY=your-api-key
nano .env

# Run database migrations (if applicable)
npm run migrate

# Start development server
npm run dev
```

### Step 3: Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Edit .env.local if needed
nano .env.local

# Start development server
npm run dev
```

### Step 4: Database Setup

```bash
# If using local MongoDB
mongod

# Create indexes
mongo
> use portfolio
> db.portfolios.createIndex({ userId: 1 })
> db.portfolios.createIndex({ createdAt: -1 })
```

## ⚙️ Configuration

### Backend Configuration (.env)

```env
# Server
NODE_ENV=development
PORT=5000
LOG_LEVEL=debug

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio
MONGO_USER=admin
MONGO_PASSWORD=password

# Authentication
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# AI
OPENAI_API_KEY=sk-your-api-key-here
OPENAI_MODEL=gpt-3.5-turbo

# CORS
CORS_ORIGIN=http://localhost:3000

# File Upload
MAX_FILE_SIZE=20971520
UPLOAD_DIR=./uploads

# Optional Services
REDIS_URL=redis://localhost:6379
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name
```

### Frontend Configuration (.env.local)

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Portfolio Generator
```

## 📖 Usage

### Creating a Portfolio

1. **Sign Up**: Create an account on the platform
2. **Start Building**: Click "Create New Portfolio"
3. **Fill Information**: Add personal info, experience, skills, education, projects
4. **Enhance with AI**: Use the "✨ AI Enhance" button for content suggestions
5. **Customize**: Choose a theme and customize colors/fonts
6. **Preview**: View your portfolio in real-time
7. **Export**: Download as PDF, HTML, or React component

### Using AI Enhancement

```javascript
// Example: Enhance experience description
POST /api/ai/enhance/experience
{
  "company": "Tech Corp",
  "position": "Senior Developer",
  "description": "Worked on web projects",
  "duration": "2 years"
}

Response:
{
  "enhancedDescription": "Led development of scalable web applications...",
  "keywords": ["leadership", "scalability"],
  "tone": "professional"
}
```

### Exporting Portfolio

```javascript
// Export as PDF
POST /api/export/pdf
{
  "portfolioId": "123456",
  "template": "modern",
  "fileName": "My_Portfolio"
}

// Export as HTML
POST /api/export/html
{
  "portfolioId": "123456",
  "template": "modern"
}

// Export as React Component
POST /api/export/react
{
  "portfolioId": "123456",
  "template": "advanced"
}
```

## 📚 API Documentation

Complete API documentation is available in [docs/api-documentation.md](docs/api-documentation.md)

### Key Endpoints

```
Portfolio Management:
  POST   /api/portfolios                    # Create portfolio
  GET    /api/portfolios                    # List all portfolios
  GET    /api/portfolios/:id                # Get portfolio
  PUT    /api/portfolios/:id                # Update portfolio
  DELETE /api/portfolios/:id                # Delete portfolio

AI Enhancement:
  POST   /api/ai/enhance/experience         # Enhance experience
  POST   /api/ai/enhance/skills             # Enhance skills
  POST   /api/ai/generate/summary           # Generate summary
  POST   /api/ai/optimize-prompt            # Optimize prompt

Export:
  POST   /api/export/pdf                    # Export as PDF
  POST   /api/export/html                   # Export as HTML
  POST   /api/export/react                  # Export as React
```

## 🐳 Deployment

### Docker Deployment

```bash
# Build and start services
docker-compose -f deployment/docker-compose.yml up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Remove volumes
docker-compose down -v
```

### Production Deployment

See [deployment/README.md](deployment/README.md) for detailed instructions on:
- SSL/TLS configuration
- Database backups
- Performance optimization
- Monitoring and logging
- Scaling strategies

## 🧪 Testing

### Run Backend Tests

```bash
cd backend

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- --testNamePattern="Portfolio"
```

### Run Frontend Tests

```bash
cd frontend

# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode
npm test -- --watch
```

### Run E2E Tests

```bash
# Install dependencies
npm install -D cypress

# Run Cypress tests
npx cypress open

# Run in headless mode
npx cypress run
```

## 🔧 Development

### Frontend Development

```bash
cd frontend

# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

### Backend Development

```bash
cd backend

# Start with nodemon
npm run dev

# Run in production mode
npm start

# Run linting
npm run lint

# Check for security vulnerabilities
npm audit
```

### Database Migrations

```bash
cd backend

# Create a migration
npm run migrate:create add_new_field

# Run migrations
npm run migrate:up

# Rollback last migration
npm run migrate:down
```

## 📊 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client Browser                        │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTPS
┌──────────────────────▼──────────────────────────────────┐
│                   Nginx Reverse Proxy                    │
│  (Rate Limiting, SSL/TLS, Compression, Caching)        │
└──────────────────────┬──────────────────────────────────┘
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
┌──────────────────┐         ┌──────────────────┐
│   React Frontend  │         │  Express Backend  │
│   (Port 3000)    │         │  (Port 5000)     │
└──────────────────┘         └────────┬─────────┘
                                      │
                    ┌─────────────────┼──────────────────┐
                    │                 │                  │
                    ▼                 ▼                  ▼
            ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
            │   MongoDB    │  │    Redis     │  │  OpenAI API  │
            │  (Port 27017)│  │ (Port 6379)  │  │              │
            └──────────────┘  └──────────────┘  └──────────────┘
```

## 🔒 Security

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Input Validation**: Comprehensive input validation and sanitization
- **CORS Configuration**: Restricted cross-origin requests
- **Rate Limiting**: Protection against abuse
- **Security Headers**: CSP, X-Frame-Options, X-Content-Type-Options
- **Environment Variables**: Sensitive data in .env files
- **Docker Security**: Non-root user, minimal image

## 📈 Performance

- **Database Indexing**: Optimized MongoDB queries
- **Caching**: Redis for frequently accessed data
- **Compression**: Gzip compression for HTTP responses
- **Lazy Loading**: Frontend code splitting and lazy routes
- **CDN Ready**: Static assets optimized for CDN delivery
- **Connection Pooling**: Database connection optimization

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Find and kill process using port
lsof -i :5000
kill -9 <PID>
```

**MongoDB Connection Failed**
```bash
# Check MongoDB status
mongosh
# or
sudo systemctl status mongod
```

**Frontend Can't Connect to Backend**
```bash
# Check CORS configuration in backend .env
# Ensure CORS_ORIGIN matches frontend URL
# Check if backend is running on correct port
```

**Out of Memory in Docker**
```bash
# Increase Docker memory limit
# Edit docker-compose.yml and add:
# deploy:
#   resources:
#     limits:
#       memory: 2G
```

See [docs/troubleshooting.md](docs/troubleshooting.md) for more help.

## 📝 Documentation

- **[API Documentation](docs/api-documentation.md)** - Complete API reference
- **[User Manual](docs/user-manual.md)** - User guide with screenshots
- **[Deployment Guide](deployment/README.md)** - Deployment and DevOps
- **[Evaluation Rubric](docs/evaluation-rubric.md)** - Project evaluation criteria

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow ESLint rules for code style
- Write tests for new features
- Update documentation
- Keep commits descriptive and atomic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

- **Email**: support@portfoliogenerator.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/AI-Based-Portfolio-Generator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/AI-Based-Portfolio-Generator/discussions)
- **Live Chat**: Available on the website during business hours

## 🙏 Acknowledgments

- OpenAI for GPT API
- MongoDB for database
- React team for amazing framework
- Express.js community
- All contributors and users

## 📊 Project Statistics

- **Frontend**: React 18, Vite
- **Backend**: Node.js 18, Express.js
- **Database**: MongoDB 5.0
- **Languages**: JavaScript/JSX
- **Total LOC**: ~10,000+
- **Test Coverage**: 85%+

## 🎯 Roadmap

- [ ] GraphQL API support
- [ ] Real-time collaboration
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Custom domain hosting
- [ ] Portfolio templates marketplace
- [ ] Video portfolio support

## 📮 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes in each release.

---

**Made with ❤️ by the Portfolio Generator Team**

[⬆ Back to top](#ai-based-portfolio-generator)
