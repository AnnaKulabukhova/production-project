import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import i18next from "eslint-plugin-i18next"
import reactHooks from "eslint-plugin-react-hooks"
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {
    languageOptions: { 
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect', 
      },
    },
  },
  ...compat.extends("standard-with-typescript"),
  pluginReactConfig,

   {
      plugins: {
          i18next:  i18next,
          'react-hooks': reactHooks
        },
    rules: {
        'react/jsx-indent-props': [2, "tab"],
        'import/no-unresolved': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/no-unused-vars": "warn",
        "i18next/no-literal-string": ['error', {markupOnly: true}],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
  },
    files: ['**/src/**/*.test.{ts, tsx}'],
    rules: {
       'i18next/no-literal-string': 'off'
    }
  },
];