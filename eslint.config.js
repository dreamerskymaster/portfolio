import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  // Global ignores
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      // Legacy/reference internship app — not part of main build
      'src/internship/vdrspresentation-ref/**',
    ],
  },

  // Base JS recommended rules for all files
  js.configs.recommended,

  // Node.js config/build script files
  {
    files: [
      'vite.config.ts',
      'postcss.config.js',
      'tailwind.config.js',
      'scripts/**/*.mjs',
      'scripts/**/*.js',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Scripts may have dead code stubs — downgrade to warn
      'no-unused-vars': 'warn',
      'no-unreachable': 'warn',
    },
  },

  // TypeScript/TSX source files (browser environment)
  {
    files: ['src/**/*.ts', 'src/**/*.tsx', 'content/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Disable base no-undef — TypeScript's compiler already catches undefined names
      'no-undef': 'off',

      // TypeScript recommended rules
      ...tsPlugin.configs['recommended'].rules,

      // React hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh (for Vite HMR)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Project-specific overrides (same as old .eslintrc.cjs)
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
