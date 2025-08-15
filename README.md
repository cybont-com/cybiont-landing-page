# Cybiont Landing Page

A production-ready, fully interactive landing page for Cybiont - the federated social platform for academic and research communities.

## 🚀 Features

- **Fully Interactive Navigation**: Smooth scroll navigation with active states
- **Responsive Design**: Mobile-first approach with hamburger menu for screens < 768px
- **Accessibility Compliant**: WCAG 2.1 AA standards with proper ARIA labels and focus management
- **Form Validation**: Robust email validation, password strength meter, and contextual error messages
- **Brand Consistency**: Uses Cybiont brand palette (#EBF2FF, #0057B8, #00B88D)
- **Performance Optimized**: Compressed assets, lazy loading, and optimized bundle sizes
- **Production Ready**: Versioned assets and deployment-ready structure

## 🎨 Brand Colors

- **Header Background**: `#EBF2FF`
- **Primary Blue**: `#0057B8`
- **Accent Green**: `#00B88D`
- **Dark**: `#1a1a1a`

## 📁 Project Structure

```
cybiont-landing-page/
├── public/
│   └── assets/
│       └── images/
│           ├── favicon.svg
│           └── favicon.png
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with mobile menu
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── Features.tsx        # Features grid
│   │   ├── About.tsx           # About section with stats
│   │   ├── Pricing.tsx         # Pricing plans
│   │   ├── Contact.tsx         # Contact form with validation
│   │   └── Footer.tsx          # Footer with links
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles and utilities
├── dist/                      # Production build output
│   ├── js/
│   │   └── main.v1.0.0.js    # Versioned JavaScript
│   ├── css/
│   │   └── main.v1.0.0.css   # Versioned CSS
│   └── assets/               # Optimized assets
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cybiont-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve production build

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with:
- Versioned JavaScript files (`js/main.v1.0.0.js`)
- Versioned CSS files (`css/main.v1.0.0.css`)
- Optimized images in `assets/images/`
- Minified and compressed code

### Deploy to cybiont.com

1. **Upload to Server**:
   ```bash
   # Upload the entire dist/ folder to your web server
   rsync -avz dist/ user@cybiont.com:/var/www/html/
   ```

2. **Configure Web Server**:
   - Ensure your web server serves the `index.html` file
   - Set up proper MIME types for assets
   - Enable gzip compression for better performance

3. **DNS Configuration**:
   - Point your domain to the server
   - Set up SSL certificate for HTTPS

### Deployment Checklist

- [ ] Assets are properly versioned
- [ ] All images are optimized
- [ ] JavaScript and CSS are minified
- [ ] HTTPS is configured
- [ ] Performance metrics are acceptable
- [ ] Accessibility testing completed
- [ ] Cross-browser testing done

## 🎯 Key Features Implementation

### Navigation
- Smooth scroll to sections
- Active state tracking
- Mobile hamburger menu with animations
- Keyboard navigation support

### Form Validation
- Email pattern validation
- Password strength meter (8+ characters)
- Real-time validation feedback
- Accessible error messages

### Accessibility
- ARIA labels and roles
- Logical tab order
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader support
- Focus management

### Performance
- Lazy loading for images
- Code splitting
- Compressed assets
- Optimized bundle sizes

## 🎨 Customization

### Colors
Update brand colors in `tailwind.config.js`:

```javascript
colors: {
  'cybiont': {
    'header': '#EBF2FF',    // Header background
    'primary': '#0057B8',   // Primary blue
    'accent': '#00B88D',    // Accent green
    // Add more colors as needed
  }
}
```

### Content
- Update text content in component files
- Replace placeholder images in `public/assets/images/`
- Modify form fields in `Contact.tsx`
- Update social links in `Footer.tsx`

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Custom animations and transitions defined in CSS

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### Built With
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

### Performance Optimizations
- Tree shaking for smaller bundles
- Asset optimization and compression
- Lazy loading for non-critical resources
- Efficient re-rendering with React

### Security
- Input sanitization
- XSS protection
- Secure form handling
- HTTPS enforcement

## 📞 Support

For questions or issues:
- Email: hello@cybiont.com
- Documentation: [Link to docs]
- Issues: [Link to issue tracker]

## 📄 License

Copyright © 2024 Cybiont. All rights reserved.
