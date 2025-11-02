# Overview

This is a personal portfolio website for **Srivatsa M G** that simulates Ubuntu 20.04 desktop environment in the browser. Built with Next.js and Tailwind CSS, it provides an interactive, desktop-like experience where visitors can explore the developer's portfolio through familiar Ubuntu applications and interfaces. The site features a fully functional desktop environment with draggable windows, a sidebar, various apps (Terminal, VS Code, Chrome browser, Calculator, etc.), and customizable wallpapers.

**Migration Status**: Successfully migrated from Vivek Patel's original template to Srivatsa M G's portfolio on November 2, 2025. All tracking functionality removed per user request.

# User Preferences

Preferred communication style: Simple, everyday language.
User request: No tracking - just a clean portfolio website.

# System Architecture

## Frontend Architecture

**Framework**: Next.js (v13.1.2) with React 18.2.0
- **Rationale**: Next.js provides server-side rendering capabilities, excellent performance optimization, and built-in routing. The static export capability makes deployment straightforward.
- **Structure**: Pages-based routing with `/pages` directory containing entry points and `/components` directory holding all UI components.

**Component Organization**:
- `/components/apps/*` - Individual application implementations (Terminal, Chrome, VS Code, Calculator, Settings, etc.)
- `/components/screen/*` - Core desktop UI components (Desktop, Navbar, Sidebar, Lock Screen, Booting Screen)
- `/components/base/*` - Reusable base components (Window, UbuntuApp, SideBarApp)
- `/components/context menus/*` - Right-click context menu implementations
- `/components/util components/*` - Utility components (Clock, Status indicators, Background image)

**State Management**: Component-level state with localStorage for persistence
- **Rationale**: Given the self-contained nature of the portfolio site, local state suffices without needing Redux or similar libraries. LocalStorage persists user preferences (wallpaper, window positions, visited screens) across sessions.

**Styling**: Tailwind CSS with custom utility classes
- **Rationale**: Tailwind provides rapid development with utility-first CSS while maintaining consistency. Custom classes in `/styles/index.css` handle Ubuntu-specific UI elements (sliders, animations).
- **Theme**: Custom Ubuntu color palette defined in `tailwind.config.js` (ub-grey, ub-orange, ub-window-title, etc.)

## Key Architectural Decisions

**Desktop Environment Simulation**:
- **Window Management**: Uses `react-draggable` for movable, resizable windows with z-index stacking
- **Application Lifecycle**: Apps maintain state through focused/minimized/closed status tracked in parent Desktop component
- **Problem Addressed**: Creating an authentic desktop experience in a web browser
- **Trade-offs**: More complex state management, but provides unique and memorable user experience

**App Configuration System** (`apps.config.js`):
- Centralized configuration for all desktop applications
- Each app defines: id, title, icon, screen component, favorite status, desktop shortcut
- **Benefit**: Easy to add/remove applications without modifying core desktop logic

**Screen Components Pattern**:
- Each app exports a display function (e.g., `displayTerminal`, `displayChrome`)
- Apps are rendered as functional components within Window containers
- **Benefit**: Consistent interface for all applications, simplified window management

**Terminal Implementation**:
- Custom command-line interface with directory navigation
- File system simulation using JavaScript object structure
- Command history with arrow key navigation
- **Rationale**: Provides interactive way to explore portfolio content while maintaining Ubuntu authenticity

**Contact Form Implementation**:
- Uses Formspree API for email handling (https://formspree.io/f/mvggerrp)
- No backend server required
- No authentication needed in client code
- **Previous Implementation**: EmailJS was removed per user request (no tracking)
- **Trade-off**: Relies on third-party service but eliminates need for backend infrastructure

## Performance Optimizations

**Image Loading**:
- WebP format for wallpapers (smaller file sizes)
- Fixed dimensions specified for icons to prevent layout shift
- Preloaded fonts to reduce flash of unstyled text

**Code Splitting**:
- Next.js automatic code splitting by page
- Dynamic imports for heavy components (though not extensively used)

**State Updates**:
- LocalStorage used for persistence without server calls
- Debounced window resize handlers to prevent excessive re-renders

## Analytics Integration

**REMOVED** - All tracking code (Google Analytics, EmailJS) has been removed per user request. The packages remain in package.json but are not imported or used in the application.

# External Dependencies

## Third-Party Services

**Formspree** (`https://formspree.io/f/mvggerrp`):
- Contact form email delivery
- Requires no authentication in client code
- Form submissions POST to Formspree endpoint

**EmailJS** (REMOVED):
- Previous email service removed per user request (no tracking)
- Current implementation uses Formspree instead
- Package remains in package.json but is not used

## External Embeds

**GitHub1s** (`https://github1s.com`):
- VS Code app embeds GitHub repository in browser-based VS Code interface
- Provides code viewing without external navigation

**Spotify** (`https://open.spotify.com/embed`):
- Embedded playlist player
- No authentication required for playback

**Google Search** (`https://www.google.com/webhp?igu=1`):
- Default homepage for Chrome app
- Embedded in iframe

## NPM Packages

**Core Framework**:
- `next` (^13.1.2) - React framework
- `react` (^18.2.0) / `react-dom` (^18.2.0) - UI library

**UI/UX**:
- `tailwindcss` (^3.2.4) - Utility-first CSS framework
- `react-draggable` (^4.4.5) - Draggable window functionality
- `react-onclickoutside` (^6.12.2) - Click-outside detection for menus/modals

**Utilities**:
- `jquery` (^3.6.3) - DOM manipulation (primarily in older components)
- `expr-eval` (^2.0.2) - Mathematical expression parser for Calculator app
- `prop-types` (^15.8.1) - Runtime type checking

**Unused Packages** (installed but not used - can be removed):
- `react-ga4` (^2.1.0) - Google Analytics 4 (removed from code per user request)
- `@emailjs/browser` (^3.10.0) - Email service (removed from code, using Formspree instead)

## Build Tools

- `autoprefixer` (^10.4.13) - CSS vendor prefixing
- `postcss` (^8.4.21) - CSS processing

## Environment Variables

**No environment variables required** - The application uses Formspree for contact form submissions with a hardcoded endpoint (https://formspree.io/f/mvggerrp). No API keys or secrets needed.

## Deployment

**Current Platform**: Replit
- Development server: Runs on port 5000 with host 0.0.0.0
- Package manager: Yarn
- Dev command: `yarn dev`

**Production Build** (for static hosting):
- Build command: `yarn build`
- Export command: `yarn export` (generates static files in `/out` directory)
- Can be deployed to Netlify, Vercel, or any static hosting platform

## Recent Changes (November 2, 2025)

**Migration from Vivek Patel to Srivatsa M G**:
- Replaced all personal information (name, bio, contact details, social links)
- Updated favicon and profile images
- Replaced resume PDF (Srivatsa-MG-Resume.pdf)
- Updated meta tags and SEO information
- Removed all tracking code (Google Analytics, EmailJS)
- Integrated Formspree for contact form
- Increased profile photo size (w-32 md:w-48)
- Added portfolio website link to boot screen (https://srivatsamg.netlify.app)
- Fixed React rendering error (AboutSrivatsa component state initialization)

**Known Minor Issues** (non-critical):
- Clock hydration warning: Expected behavior due to server/client time difference in SSR
- Next.js stylesheet warning: Google Fonts loaded via next/head instead of _document.tsx (works but not best practice)