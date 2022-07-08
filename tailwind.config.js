module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  plugins: [require("@themesberg/flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        
      }
    },
  },
};
