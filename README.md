# Backend Developer Portfolio

A modern, responsive portfolio website for backend developers built with Next.js and vanilla CSS. This portfolio showcases backend development skills, projects, and expertise with a clean, professional design.

## Features

- Clean, modern UI with soothing color palette
- Custom cursor animation
- Smooth scrolling behavior
- Responsive design for all device sizes
- Animated sections with intersection observer
- Project filtering by category
- Contact form with validation
- Social media integration

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Vanilla CSS with CSS-in-JS (styled-jsx)
- **Animations**: Custom CSS animations and transitions
- **Deployment**: Ready for deployment on Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository or download the source code

2. Navigate to the project directory
   ```bash
   cd next
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio

## Customization

### Personal Information

Update your personal information in the component files:

- `src/components/Hero.js` - Update name, title, and introduction
- `src/components/About.js` - Update about text, experience, and details
- `src/components/Skills.js` - Update your technical skills and expertise
- `src/components/Projects.js` - Add your own projects with descriptions
- `src/components/Contact.js` - Update contact information and social links

### Styling

The color scheme and global styles can be modified in `src/app/globals.css`. The site uses CSS variables for consistent theming:

```css
:root {
  --primary-color: #3a506b;
  --secondary-color: #5bc0be;
  /* other variables */
}
```

## Deployment

This portfolio is ready for deployment on Vercel, Netlify, or any other hosting platform that supports Next.js applications.

### Deploying on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

Feel free to use this template for your personal portfolio.

## Acknowledgments

- SVG icons from [Feather Icons](https://feathericons.com/)
- Font from [Google Fonts](https://fonts.google.com/)# portfolioNext
