module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",

      sm: "550px",
      // => @media (min-width: 640px) { ... }

      md: "749px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      // Background Body
      bodyPrimary: "#5c6ac4",
      bodySecondary: "#ecc94b",

      // Background Section
      sectionPrimary: "#5c6ac4",
      sectionSecondary: "#ecc94b",

      // Color text
      letterPrimary: "black",
      letterSecondary: "white",

      // Background Button
      buttonPrimary: "black",
      buttonSecondary: "white",

      // Hover Button
      buttonHoverPrimary: "white",
      buttonHoverSecondary: "black",

      // Color Normal
      white: "white",
      black, "black"
    },
  },
  plugins: [],
};
