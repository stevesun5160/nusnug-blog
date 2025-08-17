# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `pnpm dev` or `npm run dev` - Start Astro dev server
- **Build**: `pnpm build` or `npm run build` - Build for production
- **Preview**: `pnpm preview` or `npm run preview` - Preview production build
- **Lint**: `pnpm lint` or `npm run lint` - Run ESLint with auto-fix

## Architecture Overview

This is an Astro-based personal portfolio website with the following key architectural components:

### Content Management
- **Content Collections**: Defined in `src/content.config.ts` with two main collections:
  - `blog`: MDX articles in `src/data/blog/` with schema for metadata (title, description, tags, category, series)
  - `projects`: Project showcases in `src/data/projects/` with technology stacks and descriptions
- **Content Types**: Blog posts support categorization, series grouping, and automatic TOC generation

### Configuration & Constants
- **Site Config**: `src/lib/config.ts` contains global site settings (title, description, OG images)
- **Customizable Data**: All personal data stored in `src/lib/constants/`:
  - `profile.ts` - Personal information and social links
  - `experience.ts` - Work experience and positions
  - `tech-stack.ts` - Technology skills and proficiency
  - `index.ts` - Exports for easy importing

### Component Architecture
- **Layout System**: 
  - `layouts/layout.astro` - Base layout with head metadata
  - `layouts/article-layout.astro` - Blog post layout with TOC
  - `layouts/project-layout.astro` - Project showcase layout
- **UI Components**: Modular components in `src/components/ui/` following shadcn-style patterns
- **Page Sections**: Organized components in `src/components/sections/` for homepage sections

### Styling & Theming
- **TailwindCSS**: Primary styling framework with custom configuration
- **Theme System**: Light/dark mode toggle with consistent color palette
- **Typography**: Custom font loading via Fontsource (Geist Sans, JetBrains Mono, etc.)

### Key Technologies
- **Astro**: Static site generation with island architecture
- **React**: Used for interactive components (mode toggle, animations)
- **MDX**: Enhanced markdown with component support
- **TypeScript**: Strict typing throughout the codebase
- **Framer Motion**: Smooth animations and transitions

## Development Notes

- Uses `@antfu/eslint-config` with custom rules for import sorting and TypeScript preferences
- Path alias `@/*` maps to `./src/*` for clean imports
- OG images stored in `public/og-images/` for automatic social media previews
- Responsive design with mobile-first approach
- SEO optimized with dynamic metadata generation
- Accessibility considerations with semantic HTML and ARIA roles
- Thinking in English, responding in Taiwanese Mandarin(zh-TW)
