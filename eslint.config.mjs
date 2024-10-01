import globals from 'globals'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import i18next from 'eslint-plugin-i18next'
import reactHooks from 'eslint-plugin-react-hooks'
import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import jest from 'eslint-plugin-jest'
import autofix from 'eslint-plugin-autofix'
import unusedImports from 'eslint-plugin-unused-imports'
import tsParser from '@typescript-eslint/parser'

// eslint-disable-next-line @typescript-eslint/naming-convention
const __filename = fileURLToPath(import.meta.url)
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    ignores: ['.fttemplates/*']
  },
  //  ...tseslint.configs.recommendedTypeChecked,
  ...compat.extends('standard-with-typescript'),
  pluginReactConfig,

  {
    plugins: {
      i18next,
      'react-hooks': reactHooks,
      jest,
      autofix,
      'unused-imports': unusedImports
    },
    rules: {
      // react rules
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-indent-props': [2, 2],
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      // import rules
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'unused-imports/no-unused-imports': 'error',
      // ts rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/prefer-ts-expect-error': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/naming-convention': 'warn',
      // react hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      // other rules
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'warn',
      'autofix/no-debugger': 'error',
      // i18n
      'i18next/no-literal-string': ['error', { markupOnly: true }]

    },
    files: ['**/*.ts', '**/*.tsx']
  },
  {
    // test
    files: ['src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error'
    }
  }
]
