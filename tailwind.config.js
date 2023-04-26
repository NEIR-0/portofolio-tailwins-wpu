/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  // darkmode
  darkMode: "class",
  theme: {
    // change base breakpoint
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      // set up shortcut
      colors: {
        teal: "#14b8a6",
        dark: "#0f172a",
        gray: "#64748b",
        Lgray: "#94a3b8",
      },
      // change base breakpoint
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
