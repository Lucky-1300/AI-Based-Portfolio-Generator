# Frontend Tailwind CSS Setup

This folder contains the frontend application with Tailwind CSS fully configured and optimized.

## 📁 Folder Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI components
│   │   │   ├── Alert.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Divider.jsx
│   │   │   ├── Flex.jsx
│   │   │   ├── Grid.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── Select.jsx
│   │   │   ├── Textarea.jsx
│   │   │   └── index.jsx
│   │   ├── export/              # Export components
│   │   ├── form/                # Form components
│   │   └── preview/             # Preview components
│   ├── styles/
│   │   ├── global.css           # Global Tailwind CSS with custom layers
│   │   ├── builder.css
│   │   └── themes.css
│   ├── utils/
│   │   └── tailwindClasses.js   # Utility class combinations
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
├── package.json
└── index.html
```

## 🎨 Tailwind CSS Features

### Custom Theme Configuration
- **Colors**: Primary, Secondary, and Accent color schemes with 10 shades each
- **Typography**: Custom font families (Inter, Merriweather, Fira Code)
- **Spacing**: Extended spacing scale
- **Shadows**: Multiple shadow levels
- **Animations**: Custom animations (fadeIn, slideInDown, slideInUp)
- **Border Radius**: Full spectrum of border radius options

### Custom Component Layer
Pre-built utility classes for common patterns:
- `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.card`, `.card-lg`, `.card-md`, `.card-sm`
- `.input-field`, `.input-error`
- `.badge`, `.badge-primary`, `.badge-secondary`
- `.container-xl`, `.section`
- `.text-gradient`, `.hover-scale`, `.hover-shadow`

### Custom Utilities Layer
- `.truncate-2`, `.truncate-3` - Line clamping
- `.animate-fadeIn`, `.animate-slideInDown`, `.animate-slideInUp`
- `.text-gradient` - Gradient text effect
- `.hover-scale`, `.hover-shadow` - Interactive effects

## 📦 Components Available

### Common Components

#### Button
```jsx
import { Button } from '@/components/common'

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" disabled>Disabled</Button>
```

#### Card
```jsx
import { Card } from '@/components/common'

<Card size="lg" hoverable>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

#### Input
```jsx
import { Input } from '@/components/common'

<Input 
  label="Email" 
  type="email" 
  error="Invalid email"
  helperText="Enter a valid email"
/>
```

#### Grid
```jsx
import { Grid } from '@/components/common'

<Grid cols={3} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

#### Flex
```jsx
import { Flex } from '@/components/common'

<Flex justify="between" items="center" gap={4}>
  <span>Left</span>
  <span>Right</span>
</Flex>
```

#### Modal
```jsx
import { Modal } from '@/components/common'
import { useState } from 'react'

const [isOpen, setIsOpen] = useState(false)

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
  Modal content here
</Modal>
```

#### Alert
```jsx
import { Alert } from '@/components/common'

<Alert 
  type="success" 
  title="Success!" 
  message="Your changes have been saved"
/>
```

#### Badge
```jsx
import { Badge } from '@/components/common'

<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
```

#### Loader
```jsx
import { Loader } from '@/components/common'

<Loader size="md" variant="primary" />
```

#### Select
```jsx
import { Select } from '@/components/common'

<Select 
  label="Choose" 
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]}
/>
```

#### Textarea
```jsx
import { Textarea } from '@/components/common'

<Textarea label="Message" rows={5} />
```

#### Section
```jsx
import { Section } from '@/components/common'

<Section title="Features" subtitle="Amazing features">
  Content here
</Section>
```

#### Container
```jsx
import { Container } from '@/components/common'

<Container size="xl">
  Centered content with max-width
</Container>
```

#### Divider
```jsx
import { Divider } from '@/components/common'

<Divider variant="light" spacing="md" />
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

### Format
```bash
npm run format
```

## 🎯 Best Practices

1. **Use Component Props**: Prefer using component variants and props over writing custom classes
2. **Responsive Design**: Components are mobile-first and responsive by default
3. **Color Scheme**: Use primary, secondary, and accent colors consistently
4. **Spacing**: Use consistent spacing values from the theme
5. **Dark Mode**: Extend the config for dark mode support when needed
6. **Accessibility**: Components include proper ARIA labels and keyboard support

## 🔧 Configuration Files

### tailwind.config.js
Extend Tailwind's default theme with custom colors, fonts, and utilities

### postcss.config.js
PostCSS plugins configuration for Tailwind CSS and Autoprefixer

### vite.config.js
Vite build configuration with PostCSS for Tailwind CSS processing

### index.html
Entry HTML file with custom fonts from Google Fonts

## 📝 Custom CSS

All custom CSS is organized in `src/styles/global.css` using Tailwind's `@layer` directive:
- **Base**: HTML elements and typography
- **Components**: Reusable component classes
- **Utilities**: Custom utility classes

## 🌐 Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: Full support

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

## 🤝 Contributing

When adding new components:
1. Create component in `src/components/common/`
2. Export in `src/components/common/index.jsx`
3. Document usage in README
4. Follow existing component patterns
5. Use Tailwind classes for styling
6. Support responsive design

---

Built with ❤️ using React + Tailwind CSS + Vite
