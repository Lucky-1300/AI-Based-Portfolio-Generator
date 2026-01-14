# Frontend Architecture

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Browser (Client)                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    index.html                             │   │
│  │  (Entry Point - Loads React App)                         │   │
│  └──────────────────────────────────────────────────────────┘   │
│                            │                                     │
│                            ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    src/main.jsx                           │   │
│  │  (React App Initialization)                              │   │
│  │  - Imports global.css                                    │   │
│  │  - Renders App component                                 │   │
│  └──────────────────────────────────────────────────────────┘   │
│                            │                                     │
│                            ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    src/App.jsx                            │   │
│  │  (Root App Component)                                    │   │
│  │  - Provides context                                      │   │
│  │  - Routes pages                                          │   │
│  │  - Manages themes                                        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                            │                                     │
│          ┌─────────────────┼─────────────────┐                  │
│          ▼                 ▼                 ▼                   │
│      ┌────────┐        ┌────────┐      ┌───────────┐           │
│      │ Context│        │ Hooks  │      │   Pages   │           │
│      └────────┘        └────────┘      └───────────┘           │
│          │                 │                │                   │
│          │ Provides        │ Custom        │ Route to            │
│          │ State          │ Logic         │ specific            │
│          │                │               │ views               │
│          ▼                ▼               ▼                     │
│  ┌───────────────────────────────────────────┐                  │
│  │         Page Components                   │                  │
│  │ (Builder, Dashboard, Home, Preview, etc)  │                  │
│  └───────────────────────────────────────────┘                  │
│                  │                                              │
│          ┌───────┴─────────────┐                               │
│          ▼                     ▼                                │
│    ┌──────────────┐    ┌────────────────┐                     │
│    │  Components  │    │    Services    │                     │
│    │              │    │                │                     │
│    │ • Button     │    │ • aiService    │                     │
│    │ • Card       │    │ • apiClient    │                     │
│    │ • Input      │    │ • exportService│                     │
│    │ • Grid       │    │                │                     │
│    │ • Flex       │    └────────────────┘                     │
│    │ • Modal      │            │                               │
│    │ • Alert      │            ▼                               │
│    │ • Badge      │    ┌────────────────┐                     │
│    │ • Loader     │    │  Backend API   │                     │
│    │ • Select     │    │                │                     │
│    │ • Textarea   │    │ • AI Routes    │                     │
│    │ • Container  │    │ • Export Routes│                     │
│    │ • Divider    │    │ • Portfolio... │                     │
│    │ • Section    │    └────────────────┘                     │
│    └──────────────┘                                            │
│          │                                                     │
│          ▼                                                     │
│    ┌──────────────┐                                            │
│    │   Styles     │                                            │
│    │              │                                            │
│    │ • global.css │ (Tailwind + Custom)                       │
│    │ • builder.css│                                            │
│    │ • themes.css │                                            │
│    └──────────────┘                                            │
│                                                                │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Data Flow

```
User Action
    │
    ▼
Event Handler (Component)
    │
    ├─▶ Update Local State
    │
    ├─▶ Call Service Method
    │   │
    │   ▼
    │   API Client
    │   │
    │   ▼
    │   Backend API
    │   │
    │   ▼
    │   Database
    │   │
    │   ▼
    │   Response
    │
    ▼
Update Context/State
    │
    ▼
Re-render Components
    │
    ▼
Display Updates
```

## 🎨 Component Hierarchy

```
App (Root)
├── Header Components
│   ├── Navigation
│   └── User Menu
├── Main Content
│   ├── Pages
│   │   ├── Home
│   │   ├── Builder
│   │   │   ├── Form Components
│   │   │   │   ├── PersonalInfoForm
│   │   │   │   ├── ExperienceForm
│   │   │   │   ├── ProjectsForm
│   │   │   │   └── SkillsForm
│   │   │   ├── Preview Component
│   │   │   └── Theme Switcher
│   │   ├── Dashboard
│   │   ├── Preview
│   │   └── NotFound
│   └── Common Components
│       ├── Button
│       ├── Card
│       ├── Input
│       ├── Grid
│       ├── Flex
│       ├── Modal
│       ├── Alert
│       ├── Badge
│       ├── Loader
│       ├── Select
│       ├── Textarea
│       ├── Container
│       ├── Divider
│       └── Section
└── Footer Components
    └── Footer
```

## 🔌 Module Dependencies

```
src/
├── main.jsx
│   └─ App.jsx
│      ├─ Context/
│      │  ├─ PortfolioContext
│      │  ├─ ThemeContext
│      │  └─ UserContext
│      ├─ pages/
│      │  ├─ Home.jsx
│      │  ├─ Builder.jsx
│      │  ├─ Dashboard.jsx
│      │  ├─ Preview.jsx
│      │  └─ NotFound.jsx
│      └─ components/
│         ├─ common/ (14 components)
│         ├─ export/
│         ├─ form/
│         └─ preview/
│
├─ hooks/
│  ├─ useAIEnhancer.jsx
│  ├─ usePreview.jsx
│  └─ useTheme.jsx
│
├─ services/
│  ├─ aiService.js
│  ├─ apiClient.js
│  └─ exportService.js
│
├─ utils/
│  ├─ tailwindClasses.js
│  ├─ constants.js
│  ├─ formatters.js
│  ├─ validators.js
│  └─ promptTemplates.js
│
└─ styles/
   ├─ global.css (Tailwind + Custom)
   ├─ builder.css
   └─ themes.css
```

## 🎯 State Management

```
Global Context
├── PortfolioContext
│   ├── Portfolio Data
│   │   ├── Personal Info
│   │   ├── Experience
│   │   ├── Projects
│   │   └── Skills
│   └── Actions
│       ├── updatePersonalInfo
│       ├── addExperience
│       ├── removeExperience
│       ├── addProject
│       └── ...
├── ThemeContext
│   ├── Current Theme
│   ├── Theme List
│   └── setTheme()
└── UserContext
    ├── User Info
    ├── Auth Status
    └── Preferences
```

## 🚀 Build Process

```
Source Code (src/)
    │
    ├─ TypeScript/JavaScript Files
    ├─ JSX Components
    ├─ CSS/Tailwind Styles
    └─ Assets (Images, Icons)
    │
    ▼
Vite Build Process
    │
    ├─ Parse JSX
    ├─ Process Tailwind CSS
    ├─ Apply PostCSS (Autoprefixer)
    ├─ Bundle JavaScript
    ├─ Optimize Images
    └─ Generate Source Maps
    │
    ▼
dist/ (Output)
    │
    ├─ index.html
    ├─ assets/
    │   ├─ main.xxxxxxxx.js
    │   └─ style.xxxxxxxx.css
    └─ Static Assets
    │
    ▼
Deploy to Server
```

## 🔄 Development Workflow

```
npm install
    │
    ▼
npm run dev (Vite Dev Server)
    │
    ├─ Hot Module Replacement (HMR)
    ├─ File Watching
    ├─ Live Reload
    └─ Dev Tools
    │
    ▼
Edit Files
    │
    ▼
Auto-recompile & Reload
    │
    ▼
Test Changes
    │
    ▼
npm run build (Production)
    │
    ├─ Minification
    ├─ Tree Shaking
    ├─ Code Splitting
    └─ Optimization
    │
    ▼
dist/ (Production Ready)
    │
    ▼
Deploy
```

## 📱 Responsive Breakpoints

```
Mobile      Tablet      Desktop     Large
(< 640px)   (640-1024)  (1024-1280) (> 1280px)
    │           │           │           │
    ▼           ▼           ▼           ▼
  sm:       md:         lg:         xl:       2xl:
─────────────────────────────────────────────────
Single    Two        Three       Four      Four+
Column    Columns    Columns     Columns   Columns
```

## 🎨 CSS Processing Pipeline

```
global.css (Source)
    │
    ├─ @import 'tailwindcss/base'
    ├─ @import 'tailwindcss/components'
    ├─ @import 'tailwindcss/utilities'
    ├─ @layer base { ... }
    ├─ @layer components { ... }
    └─ @layer utilities { ... }
    │
    ▼
PostCSS Processing
    │
    ├─ Tailwind CSS Plugin
    ├─ Autoprefixer
    └─ Other Plugins
    │
    ▼
Compiled CSS (Output)
    │
    ├─ Tailwind Classes
    ├─ Custom Components
    ├─ Custom Utilities
    └─ Vendor Prefixes
    │
    ▼
Bundled & Minified
```

---

**Architecture Overview Complete! Ready to develop! 🚀**
