module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "terminal-background": "hsl(154 50% 5%)",
        "terminal-text": "hsl(154 84% 70%)",
      },
      fontSize: {
        "terminal-large": "1.9em",
        "terminal-medium": "1.7em",
        "terminal-small": "1.5em",
      },
      textShadow: {
        "terminal-text-shadow": "0 0 0.2em hsl(154 84% 70%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "0 0 0.2em hsl(154 84% 70%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
