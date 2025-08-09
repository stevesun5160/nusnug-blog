import antfu from '@antfu/eslint-config';

export default antfu(
  {
    vue: false,
    react: true,
    astro: true,
    stylistic: false,
    javascript: {
      overrides: {
        'sort-imports': 0,
        'no-console': 0,
        'unused-imports/no-unused-vars': 'warn',
      },
    },
    typescript: true,
  },
  {
    rules: {
      'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            ['parent-type', 'sibling-type', 'index-type', 'internal-type'],
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'side-effect',
            'object',
            'unknown',
          ],
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
      'ts/consistent-type-definitions': ['error', 'type'],
    },
  },
);
