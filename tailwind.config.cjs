module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        surface: "#161b22",
        foreground: "#c9d1d9",
        subtext: "#8b949e",
        accent: "#58a6ff",
        border: "#30363d"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideInUp: 'slideInUp 0.8s ease-out forwards',
        slideInDown: 'slideInDown 0.8s ease-out forwards',
        gradient: 'gradient 8s ease infinite'
      }
    }
  },
  plugins: []
};
