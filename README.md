# Academic Portfolio Website

A responsive, professional multi-page academic portfolio website built with React, Vite, and Tailwind CSS. This project is designed for researchers, PhD scholars, and academics to showcase their work, research, publications, and teaching experience.

![Academic Portfolio Screenshot](screenshot.png)

## 🌟 Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Multiple Pages**: Dedicated sections for research, publications, teaching, and more
- **Modern UI**: Clean, professional look with smooth animations via Framer Motion
- **CV with QR Code**: Downloadable CV with embedded QR code for easy sharing
- **Publications List**: Filterable list of academic publications
- **Research Projects**: Showcase ongoing and completed research
- **Blog & News**: Share your thoughts and latest updates
- **GitHub Pages Ready**: Set up for easy deployment to GitHub Pages

## 🚀 Tech Stack

- **React**: Frontend library for building user interfaces
- **Vite**: Fast, modern frontend build tool
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Framer Motion**: Animation library
- **QRCode.react**: QR code generation

## 📋 Pages

1. **Home**: Introduction, profile, and key highlights
2. **About Me**: Academic background, bio, and affiliations
3. **Research**: Ongoing and completed research projects
4. **Publications**: Academic papers and publications
5. **Teaching**: Teaching experience and philosophy
6. **Expertise**: Areas of expertise and skills
7. **Blog**: Academic blog posts and articles
8. **News & Updates**: Timeline of important events and announcements
9. **CV**: Downloadable CV with QR code

## 🛠️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/academic-portfolio.git
cd academic-portfolio
```

2. **Install dependencies**

```bash
bun install
```

3. **Start the development server**

```bash
bun run dev
```

4. **Build for production**

```bash
bun run build
```

## 🚢 Deployment

This project is set up for deployment to GitHub Pages using GitHub Actions. Just push to the main branch, and your site will be automatically deployed.

To configure for your GitHub username:

1. Edit `vite.config.ts` and change the base path to match your GitHub username:

```ts
base: process.env.NODE_ENV === 'production' ? '/yourusername/' : '/',
```

2. Ensure your GitHub repository is named `yourusername.github.io` for the best results.

## 🔧 Customization

1. Update personal information in the page components
2. Replace placeholder images with your own
3. Update CV link to point to your actual CV PDF
4. Modify theme colors in `src/index.css`
5. Add or remove pages as needed by editing `App.tsx` and the navbar component

## 📚 Project Structure

```
academic-portfolio/
├── .github/               # GitHub Actions workflow
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components
│   ├── data/              # Structured data
│   ├── assets/            # Images and assets
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies
```

## 📝 License

This project is MIT licensed.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/academic-portfolio/issues).

## 📸 Screenshots

To add screenshots to this README, save them to your repository and update the links.
