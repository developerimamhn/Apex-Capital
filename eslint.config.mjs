import pkg from 'eslint';
import next from '@next/eslint-plugin-next';

const { defineConfig } = pkg;

export default defineConfig({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    next,
  },
  extends: ['plugin:@next/next/recommended', 'plugin:react/recommended'],
  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',  // Next.js automatically imports React
  },
});
