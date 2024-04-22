import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import i18next from "eslint-plugin-i18next"

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import { error } from "console";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {languageOptions: { globals: globals.browser }},
  // ...compat.extends("standard-with-typescript"),
  ...tseslint.configs.recommended,
  pluginReactConfig,

   {
      plugins: {
             i18next:  i18next
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
        "i18next/no-literal-string": ['error', {markupOnly: true}]
  },
   overrides: {
    files: ['**/src/**/*.test.{ts, tsx}'],
    rules: {
      'i18next/no-literal-string': off
    }
    }
  },
];