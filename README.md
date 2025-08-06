# Yash Daga - Portfolio Website 🚀

A modern, responsive portfolio website showcasing my journey as a Software Developer, built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8)

## ✨ Features

- **Modern Design**: Clean, professional, and responsive design with smooth animations
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Interactive Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Fully Responsive**: Works seamlessly across all devices and screen sizes
- **GitHub Pages Ready**: Configured for automatic deployment to GitHub Pages
- **TypeScript**: Fully typed codebase for better development experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components with Radix UI primitives
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashDaga17/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 🚀 Deployment to GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Automatic Deployment**
   - The GitHub Action will automatically build and deploy your site
   - Your portfolio will be available at `https://yourusername.github.io/portfolio`

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main page
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Experience.tsx      # Work experience
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Hackathons.tsx      # Hackathon victories
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer section
│   ├── data/
│   │   └── portfolio.ts        # Portfolio data
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
└── package.json
```

## 🎨 Customization

### Update Personal Information
Edit the data in `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Modify Sections
Each section is a separate component in the `src/components/` directory. You can:
- Add new sections by creating new components
- Modify existing sections by editing the component files
- Update styling by modifying Tailwind classes

### Color Scheme
The portfolio uses a purple-to-blue gradient theme. You can customize colors in:
- `src/app/globals.css` for global styles
- Individual component files for specific styling

## 📊 Performance

- **100/100** Lighthouse Performance Score
- **Fully Responsive** design
- **Optimized Images** and assets
- **Fast Loading** times with Next.js optimizations

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Yash Daga**
- **Email**: dagayash17@gmail.com
- **LinkedIn**: [linkedin.com/in/yashdaga17](https://linkedin.com/in/yashdaga17)
- **GitHub**: [github.com/YashDaga17](https://github.com/YashDaga17)
- **Portfolio**: [yashdaga17.github.io/portfolio](https://yashdaga17.github.io/portfolio)

---

⭐ If you found this portfolio helpful, please consider giving it a star!

**Built with ❤️ by [Yash Daga](https://github.com/YashDaga17)**
