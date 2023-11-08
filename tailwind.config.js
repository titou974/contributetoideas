/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dim: {
            50: "#5F99F7",
            100: "#5F99F7",
            200: "#38444d",
            300: "#202e3a",
            400: "#253341",
            500: "#5F99F7",
            600: "#5F99F7",
            700: "#192734",
            800: "#162d40",
            900: "#15202b",
        },
      },
    },
    screens: {
      xs: "450px",
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#35B751",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
