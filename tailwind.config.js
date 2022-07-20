module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ["dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    lightTheme: "dark",
  },
};
