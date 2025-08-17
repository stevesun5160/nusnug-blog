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
    group: '前端技術',
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
    group: '狀態管理＆路由',
    items: [
      {
        title: 'Zustand',
        icon: Zustand,
      },
      {
        title: 'Pinia',
        icon: Pinia,
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
    group: 'CSS 框架',
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
    group: '開發工具',
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
    group: 'AI 開發工具',
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
