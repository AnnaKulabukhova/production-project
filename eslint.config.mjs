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
import eslintConfigPrettier from "eslint-config-prettier";
import { includeIgnoreFile } from '@eslint/compat';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __filename = fileURLToPath(import.meta.url)
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })
const gitignorePath = path.resolve(__dirname, ".gitignore");
export default [
   includeIgnoreFile(gitignorePath),
  {
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
         parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    // ignores: ['./.fttemplates/**/*',],
  },
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
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      "react/jsx-max-props-per-line": ['error', { "maximum": 3}],
      // import rules
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'unused-imports/no-unused-imports': 'error',
      // ts rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/consistent-type-assertions': 'warn',
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
  },
  eslintConfigPrettier
]
