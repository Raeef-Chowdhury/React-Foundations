export default {
  darkMode: "class", // Enable dark mode via a class
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust to match your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // example custom color
        secondary: "#08aa38", // example custom color
      },
    },
  },
  plugins: [],
};
