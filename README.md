# Kinch Enterprises Website

## Project Purpose

This project is the official website for Kinch Enterprises, a real estate development and general construction company. The website is designed to showcase the company's portfolio, services, and expertise to prospective clients, partners, and stakeholders. Its primary goals are to:

- Present information about the company, its history, and its leadership
- Highlight completed and ongoing projects
- Detail the range of services offered
- Provide easy ways for potential clients to get in touch
- Establish credibility and trust through a professional online presence

The intended audience includes property owners, investors, developers, and anyone interested in real estate development and construction services in the NY, NJ, CT, GA, and FL markets.

# README.md


## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Next.js linter

## Project Architecture

This is a Next.js 15 website for Kinch Enterprises, a real estate development and general construction company. The site uses:

- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS** for styling with shadcn/ui components
- **Radix UI** primitives for accessible components

### Key Structure

- `app/` - Next.js app router pages (about, contact, projects, services)
- `components/` - Reusable components including Header, Footer, and shadcn/ui components
- `components/ui/` - shadcn/ui component library (buttons, cards, forms, etc.)
- `lib/` - Utility functions (utils.ts)
- `hooks/` - Custom React hooks (mobile detection, toast)
- `public/` - Static assets including company logos (ke-black-logo.png, ke-white-logo.png)

### shadcn/ui Configuration

The project uses shadcn/ui with:
- Components configured in `components.json`
- Tailwind config extends default theme with CSS variables
- Lucide React for icons
- Path aliases: `@/components`, `@/lib/utils`, `@/hooks`

### Layout Structure

All pages use a consistent layout with Header and Footer components wrapped around the main content area in `app/layout.tsx`. The site metadata indicates it serves NY, NJ, CT, GA, and FL markets.