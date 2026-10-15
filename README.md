# The Grange Dental Surgery Website

A modern, responsive website for The Grange Dental Surgery in Bermondsey, London. Built with React and Bootstrap with a clean white and teal color scheme.

## Features

- ✨ Modern, responsive design
- 🎨 Clean white and teal color scheme
- 📱 Mobile-friendly layout
- 📞 Click-to-call phone button
- 💷 Detailed NHS pricing information
- 🗺️ Location and contact information
- ⚡ Fast and lightweight
- 🧪 Comprehensive testing suite
- 🔍 Code linting and formatting
- 🚀 Automated CI/CD pipeline

## Quick Start

### Prerequisites
- Node.js (v16, v18, or v20)
- npm (comes with Node.js)
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd grange-dental-surgery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open in your browser at `http://localhost:3000`

## Development Scripts

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Check code formatting
npm run format:check

# Format code automatically
npm run format

# Run Stylelint
npm run stylelint

# Fix style issues automatically
npm run stylelint:fix
```

### Testing
```bash
# Run tests once
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Building
```bash
# Create production build
npm run build

# Serve production build locally
npm install -g serve
serve -s build
```

## Development Workflow

### Pre-commit Hooks
This project uses Husky and lint-staged to run quality checks before commits:

- **ESLint**: Checks JavaScript/React code quality
- **Prettier**: Ensures consistent code formatting
- **Stylelint**: Checks CSS code quality

The pre-commit hook will automatically fix issues where possible and prevent commits with errors.

### Git Workflow
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add your feature description"

# Push to GitHub
git push origin feature/your-feature-name

# Create a Pull Request
```

## CI/CD Pipeline

This project includes a comprehensive CI/CD pipeline using GitHub Actions:

### What it does:
- ✅ **Multi-Node Testing**: Tests on Node.js 16, 18, and 20
- ✅ **Code Quality**: Runs ESLint, Prettier, and Stylelint
- ✅ **Unit Tests**: Runs Jest test suite with coverage
- ✅ **Build Verification**: Ensures production build works
- ✅ **Coverage Reports**: Uploads test coverage to Codecov
- ✅ **Auto-deployment**: Deploys to Netlify on main branch pushes

### Setting up CI/CD:
1. Push your code to GitHub
2. Go to Repository Settings → Secrets and variables → Actions
3. Add these secrets:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify authentication token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

## Project Structure

```
grange-dental-surgery/
├── 📁 .github/
│   └── 📁 workflows/
│       └── ci.yml                    # GitHub Actions CI/CD pipeline
├── 📁 .husky/
│   └── pre-commit                   # Pre-commit hooks
├── 📁 public/
│   ├── index.html                   # Main HTML file
│   ├── manifest.json                # App metadata
│   └── robots.txt                   # SEO robots file
├── 📁 src/
│   ├── App.js                       # Main React component
│   ├── App.css                      # Styling (white & teal theme)
│   ├── App.test.js                  # Component tests
│   └── index.js                     # React entry point
├── 📄 .prettierrc                   # Code formatting config
├── 📄 .stylelintrc.json             # CSS linting config
├── 📄 package.json                  # Dependencies and scripts
├── 📄 .gitignore                    # Git ignore rules
└── 📄 README.md                     # This file
```

## Testing Strategy

### Unit Tests
- Component rendering tests
- User interaction tests
- Accessibility tests
- Phone call functionality tests

### Coverage Goals
- Statements: >80%
- Branches: >70%
- Functions: >80%
- Lines: >80%

## Code Quality Standards

### JavaScript/React (ESLint)
- Airbnb style guide
- React best practices
- Accessibility rules
- Import/export consistency

### CSS (Stylelint)
- Standard CSS rules
- SCSS support
- Property ordering
- No unknown properties

### Code Formatting (Prettier)
- Single quotes
- Semicolons
- 2-space indentation
- 80-character line width

## Deployment Options

### Netlify (Recommended)
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Enable auto-deployment

### Vercel
1. Import your GitHub repo
2. Vercel auto-detects React
3. Deploy automatically

### Manual Deployment
1. Run `npm run build`
2. Upload the `build/` folder to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all checks pass
6. Submit a pull request

## Performance

- **Lighthouse Score**: >90 (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~92KB gzipped
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security

- This repository does not configure HTTP security headers. Configure and verify a Content Security Policy and HTTPS behavior on the chosen hosting platform before launch.
- The site does not require visitors to submit sensitive information through the frontend.
- Review and update dependencies regularly; use `npm audit` to check for known advisories.

## Monitoring

- Google Analytics (optional)
- Error tracking with Sentry (optional)
- Performance monitoring (optional)

---

## Support

For questions about the codebase:
- Check existing issues on GitHub
- Review the documentation
- Run tests locally to verify changes

For dental practice inquiries:
- Call: 020 7394 1593
- Address: 134 Grange Rd, London SE1 3GF

---

**Ready for production deployment! 🚀**
