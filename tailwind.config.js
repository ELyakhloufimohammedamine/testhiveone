/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thBg: "#F8FAFC",       // slate-50
        thInk: "#0F172A",      // slate-900
        thSub: "#334155",      // slate-700
        thPrimary: "#38BDF8",  // sky-400
        thAccent: "#A78BFA",   // violet-400
        thRing: "rgb(56 189 248 / 60%)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,.06)",
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
