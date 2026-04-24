# Samir Portfolio Website

## Live Demo

🔗 https://samir-shaikh.vercel.app/

------------------------------------------------------------------------

## Overview

This is a modern, fully responsive **personal portfolio website** built
using **React (Vite)** and **Tailwind CSS**.

The project is designed to showcase: - Real-world full-stack projects -
Technical skills and tools - UI/UX design capability - Clean and
scalable frontend architecture

The focus of this portfolio is not just visual appeal, but also: -
Performance - Maintainability - Developer-level structure - Practical
implementation of modern web technologies

------------------------------------------------------------------------

## Tech Stack

### Frontend

-   React (Vite)
-   JavaScript (ES6+)

### Styling & UI

-   Tailwind CSS
-   Custom design system (dark theme + blue accent)

### Animations

-   Framer Motion

### Icons & UI Assets

-   React Icons

### Additional Libraries

-   Typewriter Effect (dynamic text)
-   EmailJS (contact form without backend)

------------------------------------------------------------------------

## Core Features

### 1. Scalable Architecture

-   Organized folder structure:
    -   sections
    -   components/ui
    -   components/layout
    -   assets
-   Reusable and modular components
-   Clean separation of concerns

------------------------------------------------------------------------

### 2. Navbar

-   3-part layout (Logo, Navigation, Socials)
-   Smooth hover animations
-   GitHub & LinkedIn integration
-   Sticky and responsive behavior

------------------------------------------------------------------------

### 3. Hero Section

-   Animated introduction using Framer Motion
-   Typewriter effect for dynamic text
-   Profile image with gradient glow effect
-   Clean typography and spacing

------------------------------------------------------------------------

### 4. About Section

-   Split layout:
    -   Who I Am
    -   What I Do
-   Scroll-based animation
-   Visual separation using divider

#### Tech Stack Rails

-   Infinite scrolling animation
-   Dual-direction movement
-   Seamless looping
-   Icons + text combined

------------------------------------------------------------------------

### 5. Projects Section

-   Data-driven rendering using array
-   Reusable **ProjectCard component**
-   2-column responsive grid

#### Features:

-   Project image preview
-   Hover overlay:
    -   Description
    -   Tech stack
    -   Call-to-action button
-   Smooth hover animations
-   Clickable cards → opens live project

#### Projects Included:

-   **ThundrAI**\
    AI-powered chat application using MERN + Gemini API

-   **GolfImpact**\
    Reward platform with Stripe integration

-   **Spotify Clone**\
    Music UI clone using HTML, CSS, JS

-   **Full Stack To-Do**\
    MERN-based task manager with JWT authentication

------------------------------------------------------------------------

### 6. Skills Section

-   Categorized skill groups:
    -   Frontend
    -   Backend
    -   Databases
    -   Tools & Platforms
-   Icon-based representation
-   Animated card layout
-   Clean and scannable UI

------------------------------------------------------------------------

### 7. Contact Section

-   Fully functional contact form
-   Built using **EmailJS (no backend required)**

#### Features:

-   Name, Email, Message inputs
-   Real-time submission status
-   Dark UI consistency
-   Autofill styling fix

#### Environment Variables:

    VITE_EMAILJS_SERVICE_ID
    VITE_EMAILJS_TEMPLATE_ID
    VITE_EMAILJS_PUBLIC_KEY

------------------------------------------------------------------------

### 8. Footer

-   Minimal clean layout
-   Navigation shortcuts
-   Social links
-   Back-to-top functionality

------------------------------------------------------------------------

## Design System

-   Dark theme (Gray + Blue accent)
-   Consistent spacing system
-   Modern typography
-   Subtle animations (no overuse)
-   Clean and minimal UI philosophy

------------------------------------------------------------------------

## Folder Structure

``` bash
src/
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   └── Contact.jsx
│
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── NavItem.jsx
│   │   └── ProjectCard.jsx
│   │
│   └── layout/
│       ├── Navbar.jsx
│       └── Footer.jsx
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

------------------------------------------------------------------------

## Scripts

``` bash
npm run dev      # Start development
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Lint code
```

------------------------------------------------------------------------

## Current Status

- Navbar completed
- Hero section completed
- About section completed
- Projects section completed
- Skills section completed
- Contact section (EmailJS integrated)
- Footer completed

Pending: - Minor UI refinements - Responsive polish -
Micro-interactions

------------------------------------------------------------------------

## Future Improvements

-   Improve mobile responsiveness
-   Add detailed project case studies
-   Add animations polish
-   Performance optimization
-   SEO & metadata improvements
-   Custom domain integration

------------------------------------------------------------------------

## Goal

To build a **production-ready portfolio** that demonstrates: - Strong
frontend engineering skills - Real-world project experience - Clean
UI/UX thinking - Scalable architecture mindset

------------------------------------------------------------------------

## Contact

You can reach out via: - Portfolio contact form - GitHub - LinkedIn

------------------------------------------------------------------------

If you like the project, consider giving it a star!
