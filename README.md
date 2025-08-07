# Yash Daga's Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. This project showcases professional experience, projects, skills, and achievements with a beautiful dark theme and smooth animations.

## 🚀 Live Demo

- **Production**: [https://yashdaga17.github.io/Portfolio/](https://yashdaga17.github.io/Portfolio/)
- **GitHub Repository**: [https://github.com/YashDaga17/Portfolio](https://github.com/YashDaga17/Portfolio)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Development](#-development)
- [Deployment](#-deployment)
- [Components Overview](#-components-overview)
- [Data Management](#-data-management)
- [Styling & Design](#-styling--design)
- [Mobile Responsiveness](#-mobile-responsiveness)
- [Performance & SEO](#-performance--seo)
- [Contributing](#-contributing)

## ✨ Features

### 🎨 Design & User Experience
- **Modern Dark Theme**: Professional black/gray/green color palette
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Mobile-first approach with perfect display on all devices
- **Interactive Elements**: Hover effects, animated gradients, and floating elements
- **Custom Favicon**: YD logo with green accent color

### 📱 Responsive Components
- **Hero Section**: Dynamic role animations, professional avatar, social links
- **About Section**: Skills categorization, education timeline, achievements
- **Experience Timeline**: Professional journey with detailed achievements
- **Projects Showcase**: Featured projects with live demos and GitHub links
- **Hackathons**: Competition wins and technical achievements
- **Contact Form**: Email integration with pre-filled templates

### 🔧 Technical Features
- **TypeScript**: Fully typed for better development experience
- **Static Site Generation**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Image Optimization**: Next.js Image component with proper sizing
- **Fast Loading**: Optimized assets and code splitting

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 15.4.5**: React framework with static site generation
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development environment

### Styling & UI
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **shadcn/ui**: Modern component library
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Beautiful icon library

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefixing

### Deployment & CI/CD
- **GitHub Actions**: Automated deployment pipeline
- **GitHub Pages**: Static site hosting
- **Vercel**: Alternative deployment platform

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles and Tailwind imports
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Home page combining all sections
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # shadcn/ui base components
│   │   │   ├── badge.tsx       # Badge component for tags/labels
│   │   │   ├── button.tsx      # Customizable button component
│   │   │   └── card.tsx        # Card container component
│   │   ├── About.tsx           # About section with skills and education
│   │   ├── Certifications.tsx  # Professional certifications display
│   │   ├── Contact.tsx         # Contact form with email integration
│   │   ├── Experience.tsx      # Professional experience timeline
│   │   ├── Footer.tsx          # Site footer with social links
│   │   ├── Hackathons.tsx      # Hackathon achievements and projects
│   │   ├── Header.tsx          # Navigation header (if applicable)
│   │   ├── Hero.tsx            # Landing section with dynamic content
│   │   └── Projects.tsx        # Featured projects showcase
│   ├── data/
│   │   └── portfolio.ts        # Centralized data store for all content
│   └── lib/
│       ├── config.ts          # Configuration utilities for GitHub Pages
│       └── utils.ts           # Utility functions and animations
├── public/                    # Static assets
│   ├── favicon.svg           # Custom YD logo favicon
│   ├── professional_avtar.png # Professional avatar image
│   └── *.svg                 # Various UI icons
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.mjs        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **npm**: Package manager (comes with Node.js)
- **Git**: Version control

### Clone Repository
```bash
git clone https://github.com/YashDaga17/Portfolio.git
cd Portfolio
```

### Install Dependencies
```bash
npm install
```

## 🔧 Development

### Development Server
```bash
npm run dev
```
- Starts development server at `http://localhost:3000`
- Hot reload enabled for real-time changes
- TypeScript checking in development mode

### Build for Production
```bash
npm run build
```
- Creates optimized production build in `out/` directory
- Static site generation for GitHub Pages
- Asset optimization and minification

### Preview Production Build
```bash
npm run start
```
- Serves the production build locally
- Test before deployment

### Linting
```bash
npm run lint
```
- ESLint checking for code quality
- TypeScript type checking
- Automatic formatting suggestions

## 🌐 Deployment

### GitHub Pages (Current Setup)
The site is automatically deployed to GitHub Pages via GitHub Actions:

1. **Push to Main Branch**: Triggers automatic deployment
2. **Build Process**: Next.js builds static files
3. **Deploy**: Files are deployed to `gh-pages` branch
4. **Live Site**: Available at [yashdaga17.github.io/Portfolio](https://yashdaga17.github.io/Portfolio)

### Manual Deployment
```bash
# Build the project
npm run build

# The out/ directory contains all static files
# Upload contents to your hosting provider
```

### Alternative Platforms
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop `out/` folder or connect repo
- **Custom Server**: Upload `out/` contents to any static hosting

## 🧩 Components Overview

### Hero.tsx - Landing Section
**Purpose**: First impression with dynamic content and professional presentation

**Key Features**:
- Dynamic role rotation (Full-Stack Developer, React Specialist, etc.)
- Professional avatar with hover effects
- Social media links (GitHub, LinkedIn, Twitter)
- Call-to-action buttons (Resume download, Contact)
- Animated background elements
- Location and availability status

**Data Source**: `personalInfo` object from `portfolio.ts`

**Mobile Optimizations**:
- Responsive text sizing (`text-3xl sm:text-4xl lg:text-5xl xl:text-7xl`)
- Center alignment on mobile, left alignment on desktop
- Hidden floating elements on small screens
- Stacked layout for mobile devices

### About.tsx - Skills & Background
**Purpose**: Showcase technical skills, education, and personal highlights

**Key Features**:
- Skills categorized by type (Frontend, Backend, DevOps, Database)
- Education timeline with coursework and activities
- Interactive skill badges with level indicators
- Personal highlights with animated icons
- Responsive grid layouts

**Data Sources**:
- `skills` array: Technical skills with categories and levels
- `education` array: Academic background and achievements

**Animations**:
- Staggered container animations
- Scale-in effects for skill cards
- Fade-up animations for sections

### Experience.tsx - Professional Journey
**Purpose**: Display career progression and achievements

**Key Features**:
- Timeline layout for chronological order
- Company logos and external links
- Detailed achievement lists with bullet points
- Technology badges for each role
- Responsive card layouts

**Data Source**: `experience` array with detailed work history

**Mobile Fixes Applied**:
- Flexible container sizing (`p-4 sm:p-6 lg:p-8`)
- Stacked layout on mobile (`flex-col gap-6 lg:gap-8`)
- Wrapped text for long company names (`break-words`)
- Responsive font sizes (`text-xl sm:text-2xl`)

### Projects.tsx - Portfolio Showcase
**Purpose**: Highlight key projects with technical details

**Key Features**:
- Featured project cards with hover effects
- Technology stack visualization
- Live demo and GitHub links
- Project images and descriptions
- Challenge and solution explanations

**Data Source**: `projects` array with project details

**Link Management**:
- GitHub repositories: Source code access
- Live demos: Working applications
- Technology badges: Visual tech stack representation

### Hackathons.tsx - Competition Achievements
**Purpose**: Showcase competitive programming and hackathon wins

**Key Features**:
- Achievement statistics (wins, participants beaten, etc.)
- Project details for each hackathon
- Award badges and position indicators
- Team size and duration information
- Demo and code repository links

**Data Source**: `hackathons` array with competition details

**Link Types**:
- `github`: Source code repositories
- `demo`: Live project demonstrations
- `devpost`: Hackathon submission pages

### Contact.tsx - Communication Hub
**Purpose**: Provide multiple ways to get in touch

**Key Features**:
- Pre-filled email templates using `mailto:` links
- Social media integration
- Resume download link (Google Drive)
- Contact form with real feedback
- Professional contact information

**Email Integration**:
```javascript
// Constructs pre-filled email with subject and body
const emailUrl = `mailto:${personalInfo.email}?subject=Let's Connect!&body=Hi Yash,...`
```

## 📊 Data Management

### portfolio.ts - Centralized Data Store
**Purpose**: Single source of truth for all portfolio content

**Structure Overview**:
```typescript
// Personal information and contact details
export const personalInfo: PersonalInfo = {
  name, title, description, location, email, phone,
  avatar, resume, social: { github, linkedin, twitter },
  stats: { experience, projects, technologies, contributions }
}

// Professional experience with achievements
export const experience: Experience[] = [
  { company, position, duration, location, type,
    description, achievements[], technologies[] }
]

// Technical skills categorized by type
export const skills: Skill[] = [
  { name, category, level, icon, color }
]

// Featured projects with complete details
export const projects: Project[] = [
  { title, description, technologies[], features[],
    github, live, status, category, highlighted }
]

// Education background
export const education: Education[] = [
  { institution, degree, field, duration, location,
    gpa, coursework[], activities[] }
]

// Competition achievements
export const hackathons: Hackathon[] = [
  { name, organizer, date, position, award,
    project: { title, description, technologies[], github, demo },
    teamSize, highlights[] }
]

// Professional certifications
export const certificates: Certificate[] = [
  { name, issuer, date, skills[] }
]
```

### Data Relationships
- **Skills → Experience**: Technologies used in professional roles
- **Projects → Skills**: Technical implementation details
- **Hackathons → Skills**: Competition project technologies
- **Education → Skills**: Academic foundation for technical skills

### Link Management System
**GitHub Links**: All repositories follow the pattern `https://github.com/YashDaga17/{repo-name}`

**Live Demo Links**: 
- GitHub Pages projects: `https://yashdaga17.github.io/{repo-name}/`
- External deployments: Custom domain links
- Company projects: Production URLs

**Resume Link**: Google Drive shareable link for easy access and updates

## 🎨 Styling & Design

### Color Palette
```css
/* Primary Colors */
--primary-green: #22c55e;     /* Main accent color */
--background-dark: #000000;   /* Primary background */
--background-gray: #111111;   /* Secondary background */
--text-white: #ffffff;        /* Primary text */
--text-gray: #9ca3af;         /* Secondary text */

/* Gradients */
--gradient-cosmic: linear-gradient(135deg, #10b981 0%, #047857 50%, #064e3b 100%);
--gradient-card: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, transparent 100%);
```

### Design System
**Typography**:
- Headers: Bold weights with gradient text effects
- Body text: Regular weight with proper line height
- Code/tech: Monospace font for technical content

**Components**:
- Cards: Glassmorphism effect with backdrop blur
- Buttons: Hover animations and state changes
- Badges: Color-coded by category or importance
- Icons: Lucide React for consistency

**Animations**:
- Page load: Staggered entrance animations
- Hover effects: Smooth scale and color transitions
- Scroll animations: Viewport-triggered animations

### Responsive Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Large tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

## 📱 Mobile Responsiveness

### Recent Mobile Fixes Applied

**Experience Component**:
- Fixed text overflow issues with `break-words` class
- Improved responsive padding (`p-4 sm:p-6 lg:p-8`)
- Better icon sizing and positioning
- Stacked layout for mobile devices

**Hero Component**:
- Replaced emoji icons with Lucide React icons for consistency
- Hidden decorative elements on small screens
- Improved text sizing for mobile (`text-3xl sm:text-4xl lg:text-5xl`)
- Center alignment on mobile, left alignment on desktop

**General Improvements**:
- Consistent spacing system across components
- Flexible containers that adapt to screen size
- Proper text wrapping for long content
- Touch-friendly button and link sizes

### Mobile-First Approach
All components are designed mobile-first, then enhanced for larger screens:

```css
/* Base mobile styles */
.component {
  @apply text-base p-4 flex-col;
}

/* Enhanced for tablets and up */
@screen sm {
  .component {
    @apply text-lg p-6 flex-row;
  }
}

/* Enhanced for desktop */
@screen lg {
  .component {
    @apply text-xl p-8;
  }
}
```

## ⚡ Performance & SEO

### Performance Optimizations
- **Static Site Generation**: Pre-built HTML for fast loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic bundle optimization
- **Asset Optimization**: Minified CSS and JavaScript
- **CDN Delivery**: GitHub Pages global CDN

### SEO Features
```typescript
// Meta tags for better search visibility
export const metadata: Metadata = {
  title: "Yash Daga | Full-Stack Developer & Tech Innovator",
  description: "Experienced Full-Stack Developer specializing in React, Next.js, Node.js...",
  icons: {
    icon: getAssetPath("/favicon.svg"),
    shortcut: getAssetPath("/favicon.svg"),
    apple: getAssetPath("/favicon.svg"),
  },
}
```

**Additional SEO Elements**:
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Fast Core Web Vitals scores

### Lighthouse Scores
- **Performance**: 95+ (Optimized assets and loading)
- **Accessibility**: 100 (Proper ARIA labels and contrast)
- **Best Practices**: 100 (Security and modern standards)
- **SEO**: 100 (Meta tags and structured data)

## 🤝 Contributing

### Development Workflow
1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/new-feature`
3. **Make Changes**: Follow existing code patterns
4. **Test Locally**: `npm run dev` to verify changes
5. **Build Test**: `npm run build` to ensure production works
6. **Submit Pull Request**: With clear description

### Code Standards
- **TypeScript**: All new code must be properly typed
- **Component Structure**: Follow existing component patterns
- **Responsive Design**: Mobile-first approach required
- **Performance**: No unnecessary re-renders or heavy computations
- **Accessibility**: WCAG 2.1 compliance for new features

### Data Updates
To update portfolio content:
1. **Modify `src/data/portfolio.ts`**
2. **Follow existing data structure**
3. **Test all affected components**
4. **Verify mobile responsiveness**
5. **Check all links work correctly**

### Adding New Sections
1. **Create Component**: In `src/components/`
2. **Add Data Interface**: In `src/data/portfolio.ts`
3. **Export Data**: Add to portfolio data
4. **Import in Page**: Add to `src/app/page.tsx`
5. **Test Responsiveness**: Ensure mobile compatibility

## 🔗 Important Links & Resources

### Live Site & Repository
- **Portfolio Website**: [https://yashdaga17.github.io/Portfolio/](https://yashdaga17.github.io/Portfolio/)
- **GitHub Repository**: [https://github.com/YashDaga17/Portfolio](https://github.com/YashDaga17/Portfolio)

### External Project Links
- **NewsApp**: [https://yashdaga17.github.io/newsapp/](https://yashdaga17.github.io/newsapp/)
- **TextUtil**: [https://yashdaga17.github.io/Text-Util-React/](https://yashdaga17.github.io/Text-Util-React/)
- **BigTreeRecruitment**: [https://bigtreegroup.ca/](https://bigtreegroup.ca/)
- **Sponsorship Platform**: [https://yashdaga17.github.io/Sponsorship/](https://yashdaga17.github.io/Sponsorship/)

### Documentation & Tools
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [https://www.framer.com/motion/](https://www.framer.com/motion/)
- **shadcn/ui**: [https://ui.shadcn.com/](https://ui.shadcn.com/)

## 📞 Contact & Support

### Get in Touch
- **Email**: [dagayash17@gmail.com](mailto:dagayash17@gmail.com)
- **LinkedIn**: [https://linkedin.com/in/yashdaga17](https://linkedin.com/in/yashdaga17)
- **GitHub**: [https://github.com/YashDaga17](https://github.com/YashDaga17)
- **Twitter**: [https://twitter.com/yashdaga17](https://twitter.com/yashdaga17)

### Issues & Feature Requests
- Create an issue on GitHub repository
- Include detailed description and steps to reproduce
- Provide screenshots for UI-related issues
- Mention your device/browser for compatibility issues

---

**Built with ❤️ by Yash Daga using Next.js, React, TypeScript, and Tailwind CSS**

*Last Updated: August 2025*

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
- **Portfolio**: [yashdaga17.github.io/Portfolio](https://yashdaga17.github.io/Portfolio)

---

⭐ If you found this portfolio helpful, please consider giving it a star!

**Built with ❤️ by [Yash Daga](https://github.com/YashDaga17)**
