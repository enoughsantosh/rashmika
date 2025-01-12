module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        topLeft: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-150px, -150px)" },
        },
        topRight: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(150px, -150px)" },
        },
        bottomLeft: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-150px, 150px)" },
        },
        bottomRight: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(150px, 150px)" },
        },
        reset: {
          "0%": { transform: "translate(var(--tw-translate-x), var(--tw-translate-y))" },
          "100%": { transform: "translate(0, 0)" },
        },
        circle1: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100px, -100px)" },
        },
        circle2: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(100px, -100px)" },
        },
        circle3: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100px, 100px)" },
        },
        circle4: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(100px, 100px)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "top-left": "topLeft 1s ease-in-out forwards",
        "top-right": "topRight 1s ease-in-out forwards",
        "bottom-left": "bottomLeft 1s ease-in-out forwards",
        "bottom-right": "bottomRight 1s ease-in-out forwards",
        reset: "reset 1s ease-in-out forwards",
        "circle-1": "circle1 1.5s ease-in-out infinite",
        "circle-2": "circle2 1.5s ease-in-out infinite",
        "circle-3": "circle3 1.5s ease-in-out infinite",
        "circle-4": "circle4 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
