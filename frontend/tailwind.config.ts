import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "outline-variant": "#c7c4d7",
        "surface-bright": "#ffffff",
        "surface-container-high": "#f1f5f9",
        "on-tertiary": "#ffffff",
        "surface-container-low": "#f8fafc",
        "on-error": "#ffffff",
        "secondary-container": "#eaddff",
        "surface-variant": "#f1f5f9",
        "surface-container-lowest": "#ffffff",
        "primary-container": "#e1e0ff",
        "primary-fixed-dim": "#494bd6",
        "on-tertiary-container": "#001f26",
        "on-secondary-fixed-variant": "#503788",
        "tertiary": "#00677d",
        "primary": "#494bd6",
        "background": "#f8f9fc",
        "on-secondary-container": "#24005b",
        "on-primary-fixed-variant": "#2f2ebe",
        "inverse-surface": "#2d3449",
        "on-surface": "#171f33",
        "on-secondary": "#ffffff",
        "secondary": "#6750a4",
        "on-surface-variant": "#464554",
        "tertiary-fixed": "#acedff",
        "tertiary-container": "#acedff",
        "outline": "#767680",
        "on-tertiary-fixed-variant": "#004e5c",
        "primary-fixed": "#e1e0ff",
        "on-tertiary-fixed": "#001f26",
        "on-secondary-fixed": "#24005b",
        "surface-dim": "#f8f9fc",
        "secondary-fixed": "#eaddff",
        "tertiary-fixed-dim": "#4cd7f6",
        "on-error-container": "#410002",
        "surface-container": "#f8fafc",
        "surface-tint": "#494bd6",
        "on-primary-fixed": "#07006c",
        "inverse-on-surface": "#f1f5f9",
        "surface": "#ffffff",
        "on-background": "#171f33",
        "error": "#ba1a1a",
        "inverse-primary": "#c0c1ff",
        "on-primary": "#ffffff",
        "on-primary-container": "#00006e",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#d1bcff",
        "surface-container-highest": "#e2e8f0"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1280px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "base": "8px",
        "gutter": "24px"
      },
      fontFamily: {
        "label-sm": ["JetBrains Mono"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"],
        "headline-md": ["Inter"],
        "headline-lg": ["Inter"]
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
