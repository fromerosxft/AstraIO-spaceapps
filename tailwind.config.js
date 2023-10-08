module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
        'gradient-radial': 'radial-gradient(circle at 2rem 2rem, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'plt': 'inset -2rem -2rem 2rem 0.5rem rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        'moving': {
          '0%': {
            'background-position': 'right 0rem top 0'
          },
          '100%': {
            'background-position': 'right 20rem top 0'
          },
        },
        'spin-plt': {
          '0%': {
            'left': '20%',
            'top': '40%'
          },
          '25%': {
            'left': '40%',
            'top': '80%',
            'z-index': '2'
          },
          '50%': {
            'left': '80%',
            'top': '40%'
          },
          '75%': {
            'left': '40%',
            'top': '0%'
          },
          '100%': {
            'left': '20%',
            'top': '40%'
          },
        }
      },
      animation: {
        'moving': 'moving 15s infinite linear',
        'spin-plt': 'spin-plt 25s infinite linear',
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
