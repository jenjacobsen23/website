# Jen Jacobsen - Portfolio Website

A modern, responsive portfolio website showcasing Jen Jacobsen's skills, projects, and professional experience as a Full-Stack Developer.

## 🚀 Live Demo

[View Live Portfolio](https://jenjacobsen.com) _(Replace with actual URL when deployed)_

## ✨ Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Interactive Sections**: Smooth scrolling navigation and animated components
- **Contact Form**: Integrated contact form with email functionality via Resend
- **Project Showcase**: Detailed project portfolio with descriptions and links
- **Skills Display**: Comprehensive technical skills organized by category
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Ready**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Backend & APIs

- **Next.js API Routes** - Server-side functionality
- **Resend** - Email service for contact form
- **Zod** - Schema validation

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
jen-portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── services-section.tsx
│   ├── skills-section.tsx
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/jen-portfolio.git
   cd jen-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your configuration:

   ```env
   # Resend Configuration (for contact form)
   RESEND_API_KEY=re_your_api_key_here
   FROM_EMAIL=noreply@resend.dev
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup

This portfolio includes a contact form that sends emails via Resend. See [RESEND_SETUP.md](./RESEND_SETUP.md) for detailed setup instructions.

### Quick Setup:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to your `.env.local` file
4. Test the contact form

## 🎨 Customization

### Personal Information

Update the following files to customize your portfolio:

- **`app/layout.tsx`** - Update title and meta description
- **`components/hero-section.tsx`** - Modify hero text and call-to-action
- **`components/about-section.tsx`** - Update personal description
- **`components/skills-section.tsx`** - Add/remove skills
- **`components/projects-section.tsx`** - Add your projects
- **`components/services-section.tsx`** - Update services offered

### Styling

- **Colors**: Modify Tailwind CSS variables in `app/globals.css`
- **Fonts**: Update font imports in `app/layout.tsx`
- **Components**: Customize UI components in `components/ui/`

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Package Manager
npm install          # Install dependencies
npm update           # Update dependencies
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Deploy directly from GitHub

## 🔧 Environment Variables

| Variable         | Description                            | Required |
| ---------------- | -------------------------------------- | -------- |
| `RESEND_API_KEY` | Resend API key for email functionality | Yes      |
| `FROM_EMAIL`     | Email address to send from             | Yes      |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About Jen Jacobsen

Jen is a Full-Stack Developer with 8+ years of experience specializing in:

- **Frontend**: Angular, React, Next.js, TypeScript
- **Backend**: .NET Core, C#, ASP.NET, SQL
- **Mobile**: React Native, Flutter
- **DevOps**: Azure, Git, CI/CD

## 📞 Contact

- **Email**: contact@jenjacobsen.com
- **LinkedIn**: [Jen Jacobsen](https://linkedin.com/in/jenjacobsen)
- **GitHub**: [@jenjacobsen](https://github.com/jenjacobsen)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
