# Ammar Portfolio - Project Plan

## Phase 1: Project Setup & Configuration
- [x] Initialize Next.js project (App Router, TypeScript)
- [x] Upgrade/Setup Tailwind CSS v4
- [x] Install Framer Motion
- [x] Configure `next.config.js` for `output: 'export'` (GitHub Pages)
- [x] Setup folder structure (`components`, `hooks`, `lib`, `styles`, `data`)

## Phase 2: Design System & Foundation
- [x] Define Theme Colors & Typography (Global CSS/Tailwind)
- [x] Create reusable UI components:
    - [x] `Button` (Implicit in sections, can be extracted)
    - [x] `Section` (Implicit in sections)
    - [x] `Card` (Implicit in projects)
    - [x] `Text` (headings, paragraphs with standardized styling)
- [x] Implement responsive layout wrapper

## Phase 3: Core Layout Components
- [x] **Navbar**: Responsive, glassmorphism effect, mobile menu
- [x] **Footer**: Social links, copyright, simple layout
- [x] **Background**: Abstract animated background or clean gradient

## Phase 4: Page Sections Implementation
- [x] **Hero Section**:
    - [x] Introduction text
    - [x] CTA buttons
    - [x] 3D or animated element (optional but recommended for "wow" factor)
- [x] **About Section**:
    - [x] Bio text
    - [x] Profile image styling
- [x] **Skills Section**:
    - [x] Marquee or Grid layout of technologies
- [x] **Experience/Timeline**:
    - [x] Vertical timeline component using Framer Motion
- [x] **Projects Section**:
    - [x] Grid layout with hover effects
    - [x] Project cards (Image, Title, Description, Tags, Links)
- [x] **Contact Section**:
    - [x] simple form or email link with nice copy capability
    - [x] Social links

## Phase 5: Animations & Polish
- [x] Implement Page Transitions (Framer Motion)
- [x] Add Scroll Reveal animations to all sections
- [x] Add Hover effects on interactive elements
- [x] Verify Mobile Responsiveness

## Phase 6: SEO & Optimization
- [ ] Add Metadata (Title, Description, OG Tags)
- [ ] Optimize Images (next/image)
- [ ] Audit Accessibility (ARIA labels, color contrast)
- [ ] Final Build Check