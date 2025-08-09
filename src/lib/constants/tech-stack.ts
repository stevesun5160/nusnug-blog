import {
  Bootstrap5,
  ClaudeAI,
  Cypress,
  Docker,
  ESLint,
  Git,
  GitHubCopilot,
  GitHubDark,
  I18next,
  JavaScript,
  NPM,
  Pinia,
  PnpmDark,
  Prettier,
  React,
  ReactQuery,
  ReactRouter,
  Sass,
  ShadcnUI,
  Stylelint,
  TailwindCSS,
  TypeScript,
  ViteJS,
  Vitest,
  VueJs,
  Zod,
} from 'developer-icons';

import Zustand from '@/components/ui/icons/zustand.astro';

export const TECH_STACK_GROUPS = [
  {
    group: 'Languages & Frameworks',
    items: [
      {
        title: 'JavaScript',
        icon: JavaScript,
      },
      {
        title: 'TypeScript',
        icon: TypeScript,
      },
      {
        title: 'React',
        icon: React,
      },
      {
        title: 'Vue 3',
        icon: VueJs,
      },
    ],
  },
  {
    group: 'Libraries',
    items: [
      {
        title: 'Zustand',
        icon: Zustand,
      },
      {
        title: 'React Router',
        icon: ReactRouter,
      },
      {
        title: 'TanStack Router',
        icon: '/tanstack.webp',
      },
      {
        title: 'TanStack Query',
        icon: ReactQuery,
      },
      {
        title: 'Pinia',
        icon: Pinia,
      },
      {
        title: 'Vue Router',
        icon: VueJs,
      },
      {
        title: 'Zod',
        icon: Zod,
      },
      {
        title: 'i18n',
        icon: I18next,
      },
    ],
  },
  {
    group: 'Styling',
    items: [
      {
        title: 'Tailwind CSS',
        icon: TailwindCSS,
      },
      {
        title: 'Bootstrap 5',
        icon: Bootstrap5,
      },
      {
        title: 'SASS',
        icon: Sass,
      },
      {
        title: 'Shadcn UI',
        icon: ShadcnUI,
      },
    ],
  },
  {
    group: 'Tools & Utilities',
    items: [
      {
        title: 'ESLint',
        icon: ESLint,
      },
      {
        title: 'Stylelint',
        icon: Stylelint,
      },
      {
        title: 'Prettier',
        icon: Prettier,
      },
    ],
  },
  {
    group: 'Version Control & CI/CD',
    items: [
      {
        title: 'Git',
        icon: Git,
      },
      {
        title: 'GitHub Actions',
        icon: GitHubDark,
      },
      {
        title: 'Docker',
        icon: Docker,
      },
    ],
  },
  {
    group: 'Testing & Development Tools',
    items: [
      {
        title: 'Vite',
        icon: ViteJS,
      },
      {
        title: 'Vitest',
        icon: Vitest,
      },
      {
        title: 'Cypress',
        icon: Cypress,
      },
    ],
  },
  {
    group: 'Package Managers',
    items: [
      {
        title: 'PNPM',
        icon: PnpmDark,
      },
      {
        title: 'NPM',
        icon: NPM,
      },
    ],
  },
  {
    group: 'AI Tools',
    items: [
      {
        title: 'Claude Code',
        icon: ClaudeAI,
      },
      {
        title: 'GitHub Copilot',
        icon: GitHubCopilot,
      },
    ],
  },
];
