import type {CheckType} from '@helpers/check';

export const APP_REPO = 'https://codeload.github.com/nextui-org/next-app-template/tar.gz/main';
export const PAGES_REPO = 'https://codeload.github.com/nextui-org/next-pages-template/tar.gz/main';

export const APP_DIR = 'next-app-template-main';
export const PAGES_DIR = 'next-pages-template-main';

export function tailwindTemplate(type: 'all', content?: string): string;
export function tailwindTemplate(type: 'partial', content: string): string;
export function tailwindTemplate(type: CheckType, content?: string) {
  if (type === 'all') {
    return `// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};`;
  } else {
    return `// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ${JSON.stringify(content)},
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};`;
  }
}
