/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        cream: '#FDFBF7',
        slate: {
          850: '#1e293b',
          900: '#0f172a',
        },
        coral: {
          DEFAULT: '#FF8FAB',
          dark: '#FF5C8D'
        },
        teal: {
          DEFAULT: '#2A9D8F',
          dark: '#217A6F'
        },
        yellow: {
          DEFAULT: '#E9C46A',
          dark: '#D4A015'
        }
      },
      animation: {
        'breathe': 'breathe 12s infinite ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '33%': { transform: 'scale(1.8)', opacity: '1' }, // Fin Inspire 4s
          '50%': { transform: 'scale(1.8)', opacity: '1' }, // Fin Bloque 2s
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
