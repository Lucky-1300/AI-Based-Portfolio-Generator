# Tailwind CSS Setup Guide

Complete Tailwind CSS setup for the AI-Based Portfolio Generator frontend.

## ✅ What's Included

### Configuration Files
- ✅ `tailwind.config.js` - Complete Tailwind configuration with custom theme
- ✅ `postcss.config.js` - PostCSS setup for Tailwind CSS processing
- ✅ `vite.config.js` - Vite configuration optimized for Tailwind CSS
- ✅ `.eslintrc.cjs` - ESLint configuration
- ✅ `.prettierrc` - Prettier code formatting configuration
- ✅ `.env.example` - Environment variables template
- ✅ `.gitignore` - Git ignore rules

### Styles
- ✅ `src/styles/global.css` - Main CSS file with Tailwind directives and custom layers
- ✅ `src/App.css` - App-specific styles (ready for custom styling)
- ✅ `src/styles/builder.css` - Builder component styles (extensible)
- ✅ `src/styles/themes.css` - Theme-specific styles (extensible)

### React Components
- ✅ `src/components/common/Button.jsx` - Flexible button component with variants
- ✅ `src/components/common/Card.jsx` - Card component with sizing options
- ✅ `src/components/common/Badge.jsx` - Badge component with color variants
- ✅ `src/components/common/Input.jsx` - Input field with validation
- ✅ `src/components/common/Select.jsx` - Select/dropdown component
- ✅ `src/components/common/Textarea.jsx` - Textarea component
- ✅ `src/components/common/Container.jsx` - Responsive container
- ✅ `src/components/common/Grid.jsx` - Responsive grid layout
- ✅ `src/components/common/Flex.jsx` - Flexible layout utility
- ✅ `src/components/common/Modal.jsx` - Modal dialog component
- ✅ `src/components/common/Alert.jsx` - Alert/notification component
- ✅ `src/components/common/Loader.jsx` - Loading spinner component
- ✅ `src/components/common/Divider.jsx` - Divider component
- ✅ `src/components/common/Section.jsx` - Section wrapper component
- ✅ `src/components/common/index.jsx` - Central component export

### Entry Points
- ✅ `src/main.jsx` - React app entry point with CSS import
- ✅ `src/App.jsx` - Demo app component showing Tailwind usage
- ✅ `index.html` - HTML template with Google Fonts

### Utilities
- ✅ `src/utils/tailwindClasses.js` - Reusable Tailwind class combinations
- ✅ `src/utils/constants.js` - App constants (extensible)
- ✅ `src/utils/formatters.js` - Formatting utilities (extensible)
- ✅ `src/utils/validators.js` - Validation utilities (extensible)
- ✅ `src/utils/promptTemplates.js` - Prompt templates (extensible)

### Documentation
- ✅ `README.md` - Frontend documentation with component usage examples
- ✅ `TAILWIND_SETUP.md` - This file

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Set Up Environment
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

## 📋 Theme Customization

### Colors
Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* custom shades */ },
      secondary: { /* custom shades */ },
      accent: { /* custom shades */ },
    }
  }
}
```

### Typography
Add custom fonts or modify existing ones:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  serif: ['Your Serif Font', 'serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

### Spacing
Extend spacing scale:

```javascript
spacing: {
  // Add custom spacing values
}
```

## 🎨 Component Usage Examples

### Using Pre-built Components
```jsx
import { Button, Card, Input } from '@/components/common'

export default function MyComponent() {
  return (
    <Card size="lg">
      <h2>My Form</h2>
      <Input label="Name" placeholder="Enter name" />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}
```

### Using Tailwind Classes Directly
```jsx
export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white py-20">
      <h1 className="text-4xl font-bold text-primary-600">Welcome</h1>
      <p className="text-lg text-secondary-600 mt-4">
        Build amazing portfolios with AI
      </p>
    </div>
  )
}
```

### Using Utility Classes
```jsx
import { containerClasses, buttonClasses } from '@/utils/tailwindClasses'

export default function Demo() {
  return (
    <div className={containerClasses.base + ' ' + containerClasses.size.xl}>
      <button className={buttonClasses.base + ' ' + buttonClasses.primary}>
        Click me
      </button>
    </div>
  )
}
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🎯 Custom Layers in global.css

### Base Layer
- HTML element defaults
- Typography styling (h1-h6, p, a)

### Components Layer
- `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.card`, `.card-lg`, `.card-md`, `.card-sm`
- `.input-field`, `.input-error`
- `.badge`, `.badge-primary`, `.badge-secondary`, `.badge-accent`
- `.container-xl`, `.section`

### Utilities Layer
- `.animate-fadeIn`, `.animate-slideInDown`, `.animate-slideInUp`
- `.truncate-2`, `.truncate-3` (line clamping)
- `.text-gradient` (gradient text effect)
- `.hover-scale`, `.hover-shadow` (interactive effects)

## 🔌 Available Color Scales

Each color has 10 shades (50, 100, 200, ..., 900):

- **Primary**: Blues - Use for main actions and calls-to-action
- **Secondary**: Grays - Use for text, backgrounds, and neutral elements
- **Accent**: Purples - Use for highlights and special attention

## 🎓 Best Practices

1. **Component-First**: Use pre-built components when possible
2. **Responsive Design**: Components are mobile-first by default
3. **Consistency**: Use theme colors consistently throughout the app
4. **Performance**: Tailwind automatically purges unused CSS
5. **Accessibility**: Components include proper ARIA labels
6. **Dark Mode**: Configure in tailwind.config.js when needed

## 🐛 Troubleshooting

### Styles Not Showing
- Ensure `index.html` is importing styles correctly
- Check that `src/styles/global.css` has Tailwind directives
- Verify `tailwind.config.js` has correct content paths

### Build Issues
- Delete `node_modules` and `package-lock.json`, then reinstall
- Clear Vite cache: `rm -rf dist .vite`
- Check Node.js version compatibility

### Component Not Showing
- Verify component is exported in `src/components/common/index.jsx`
- Check import path is correct
- Ensure no TypeScript errors if using .ts/.tsx files

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [PostCSS Documentation](https://postcss.org)

## 🔄 Next Steps

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Build components**: Create new components in `src/components/`
4. **Add pages**: Create new pages in `src/pages/`
5. **Connect backend**: Configure API endpoints in `.env`
6. **Deploy**: Run `npm run build` and deploy the `dist` folder

## 📝 Notes

- All components are fully typed and ready for TypeScript if needed
- The setup uses Vite 5 with React 18.2
- Tailwind CSS 4 with the Vite plugin for optimal build times
- PostCSS and Autoprefixer ensure cross-browser compatibility

---

Ready to build amazing portfolios! 🚀
