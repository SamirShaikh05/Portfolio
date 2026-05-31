# Samir Portfolio Website

## Live Demo

🔗 https://samir-shaikh.vercel.app/

---

## Overview

A production-focused personal portfolio built with React and Vite. It showcases projects, skills, and a contact flow with a polished dark UI, motion-driven interactions, and modular components.

Purposes:
- Present technical work and project links
- Demonstrate front-end engineering (components, animations, responsive layouts)
- Provide an accessible contact route for recruiters and collaborators

Design philosophy: component reusability, motion for clarity (not flash), and progressive enhancement across screen sizes.

---

## Features
Grouped by UI sections and responsibilities.

- Hero
	- Animated intro with a typewriter headline
	- Prominent CTA and profile visual
	- Entrance transitions using Framer Motion

- About
	- Split layout for bio + stats
	- Smooth reveal animations and readable typography

- Projects
	- Data-driven `ProjectCard` components
	- External links (live / repo) and hover overlays
	- Responsive grid with interactive controls

- Skills
	- Categorized skill lists with subtle motion
	- Readable grouping for recruiters

- Contact
	- Contact form powered by EmailJS (`@emailjs/browser`)
	- Name, email, message, and submission feedback
	- Social links surfaced in the site footer

- Footer
	- Minimal navigation and social links
	- Copyright / quick anchors

---

## Tech Stack

### Frontend
- React (v19)
- Vite
- React Router DOM

### Styling
- Tailwind CSS
- Custom CSS in `index.css`

### Animations
- Framer Motion
- GSAP (for select effects)

### Integrations
- EmailJS (`@emailjs/browser`) for the contact form
- Three / OGL for background/visual effects
- React Icons
- Typewriter Effect

### Deployment
- Vercel (recommended)

---

## Architecture & Folder Structure
Updated tree reflecting the current source layout.

```bash
src/
├── assets/
├── components/
│   ├── layout/
	 │   ├── Footer.jsx
	 │   │   └── Navbar.jsx
	 │   └── ui/
	 │       ├── Button.jsx
	 │       ├── DotField.jsx
	 │       ├── MagicRings.jsx
	 │       ├── Meteors.jsx
	 │       ├── NavItem.jsx
	 │       ├── Orb.jsx
	 │       └── ProjectCard.jsx
├── sections/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## Key UI/UX Highlights
- Framer Motion animations for entrance and micro-interactions
- Responsive-first layouts (desktop → tablet → mobile)
- Reusable UI components (`ProjectCard`, `Button`, `NavItem`)
- Smooth scrolling and section anchoring
- Interactive project cards with hover overlays and external links
- Modern dark theme with accessible contrast and accent gradients
- Background effects: `DotField`, `Orb`, `MagicRings`, `Meteors`

---

## Getting Started

### Clone Repository

```bash
git clone <repo-url>
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` (Vite picks up `VITE_` prefixed variables):

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

### Run Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Deployment
Deploy the project to Vercel for zero-config builds:

1. Connect the GitHub repo to Vercel
2. Set the Vite environment variables on Vercel (`VITE_...`)
3. Use the default build command `npm run build` and output directory `dist`

---

## Current Status

Completed features:
- Navbar
- Hero
- About
- Projects (data-driven cards)
- Skills
- Contact (EmailJS integration)
- Footer

Currently improving:
- Mobile/responsive polish across breakpoints
- Micro-interactions and animation refinements
- Performance tuning and SEO metadata

---

## Future Improvements
- Add richer project case studies with screenshots and metrics
- Add automated Lighthouse checks in CI
- Improve accessibility (ARIA labels, keyboard flow) and SEO meta

---

## Contact
- Portfolio: https://samir-shaikh.vercel.app/
- GitHub: link available in the site footer
- LinkedIn: link available in the site footer
- Contact form: available on the site (uses EmailJS)

If you prefer direct contact details added to this README, provide the exact URLs and I will include them.

---

If this repo was helpful, a star is appreciated ⭐
