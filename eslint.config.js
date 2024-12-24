import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default {
  ignores: ["dist"],
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: parser,
    parserOptions: {
      sourceType: "module",
      project: "./tsconfig.json",
    },
  },
  plugins: {
    "@typescript-eslint": tseslint,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  extends: [
    js.configs.recommended,
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};