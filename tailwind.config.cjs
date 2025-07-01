module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200% 200%',
      },
      colors: {
        background: "#121212",
        surface: "#1e1e1e",
        foreground: "#e0e0e0",
        subtext: "#9e9e9e",
        accent: "#10b981",
        border: "#272727"
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      keyframes: {
        gradientText: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
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
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 100%': { 'border-right-color': 'transparent' },
          '50%': { 'border-right-color': 'currentColor' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        gradientText: 'gradientText 5s ease infinite',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideInUp: 'slideInUp 0.8s ease-out forwards',
        slideInDown: 'slideInDown 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        gradient: 'gradient 8s ease infinite',
        typewriter: 'typewriter 3s steps(30) forwards',
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
