/** @type {import("prettier").Config} */
export default {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/global.css',
  tailwindFunctions: ['cn', 'clsx'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
