import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/dist/**', '**/.turbo/**', '**/.graphify/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
