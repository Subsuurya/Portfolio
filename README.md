# Backend Developer Portfolio

A modern, responsive portfolio website built with React.js and TailwindCSS, showcasing backend development expertise with a focus on microservices, cloud architecture, and database optimization.

## 🚀 Features

### Sections
- **Hero**: Professional summary with achievements and tech stack
- **About Me**: Education, experience timeline, and comprehensive skills grid
- **Projects Portfolio**: Featured projects with GitHub/demo links and detailed descriptions
- **Blog**: Tech articles with syntax highlighting and code examples
- **Resume**: Downloadable PDF with professional timeline and certifications
- **Testimonials**: Client testimonials carousel with GitHub statistics
- **Contact**: Interactive contact form with social links and availability status
- **Footer**: Quick links, contact info, and social media integration

### Design & UX
- **Clean & Professional**: Recruiter-friendly design with modern typography
- **Color Scheme**: White/gray base with blue/emerald accents
- **Responsive**: Fully responsive design for all device sizes
- **Animations**: Smooth Framer Motion animations throughout
- **Accessibility**: Proper semantic HTML and ARIA labels

### Technical Features
- **Modern Stack**: React 18 + Vite + TailwindCSS
- **Animations**: Framer Motion for smooth transitions
- **Syntax Highlighting**: React Syntax Highlighter for code examples
- **Icons**: Lucide React for consistent iconography
- **Performance**: Optimized bundle size and loading

## 🛠️ Technologies Used

- **Frontend**: React.js, TailwindCSS, Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Syntax Highlighting**: React Syntax Highlighter
- **Styling**: TailwindCSS with custom components

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue shades (600, 700, etc.)
- Secondary: Emerald shades (600, 700, etc.)
- Base: Gray shades (50, 100, 900, etc.)

### Content
Update the following files to customize content:
- `src/components/Hero.jsx` - Personal summary and achievements
- `src/components/About.jsx` - Education, experience, and skills
- `src/components/Projects.jsx` - Project portfolio
- `src/components/Blog.jsx` - Blog posts and articles
- `src/components/Resume.jsx` - Professional timeline and certifications
- `src/components/Testimonials.jsx` - Client testimonials
- `src/components/Contact.jsx` - Contact information and social links

### Styling
- Global styles: `src/index.css`
- Component styles: Individual component files with TailwindCSS classes
- Custom components: Defined in `src/index.css` under `@layer components`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: contact@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Made with ❤️ and modern web technologies