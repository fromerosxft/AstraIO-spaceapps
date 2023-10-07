/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
        'gradient-radial': 'radial-gradient(circle at 2rem 2rem, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00aeef",
          "secondary": "#57d374",
          "accent": "#232323",
          "neutral": "#000",
          "base-100": "#fff",
          "info": "#00b0ff",
          "success": "#00c853",
          "warning": "#facc15",
          "error": "#ff5252",
        },
      },
    ],
  },
};
