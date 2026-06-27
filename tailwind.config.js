/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        surface: "#14141c",
        panel: "#1a1a24",
        text: "#e8e8ec",
        muted: "#8a8a96",
        ember: "#ff3b30",
        gold: "#ffb800",
        shield: "#2979ff",
        gamma: "#6fd13c",
      },
      fontFamily: {
        heading: ["Russo One", "sans-serif"],
        body: ["Exo 2", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      boxShadow: {
        glow:
          "0 0 0 1px rgba(255,184,0,0.2), 0 0 18px rgba(255,59,48,0.2), 0 0 32px rgba(255,184,0,0.18)",
        shield: "0 0 20px rgba(41,121,255,0.25)",
        gamma: "0 0 20px rgba(111,209,60,0.25)",
      },
      backgroundImage: {
        "power-gradient": "linear-gradient(135deg, #ff3b30, #ffb800)",
        "tech-gradient": "linear-gradient(135deg, #2979ff, #6fd13c)",
      },
      clipPath: {
        armor: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
      },
    },
  },
  plugins: [],
};
