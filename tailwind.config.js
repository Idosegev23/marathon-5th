/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Original color scheme (keeping for backward compatibility)
        primary: '#FAAB99',
        secondary: '#B1C6E5', 
        accent: '#FFC0DA',
        'light-gray': '#F7FAFC',
        'warm-white': '#FFFFFE',
        'soft-blue': '#B1C6E5',
        'text-black': '#1A202C',
        'border-light': '#E2E8F0',
        
        // New Pastel Color Palette
        'pastel-yellow': '#FFDD86',
        'pastel-coral': '#FAAB99', 
        'pastel-pink': '#FFC0DA',
        'pastel-mint': '#C2EFDD',
        'pastel-blue': '#B1C6E5',
        
        // Additional utility colors
        'success-green': '#C2EFDD',
        'warm-yellow': '#FFDD86',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'soft': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 20px 60px rgba(0, 0, 0, 0.12)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'gentle-bounce': 'gentle-bounce 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
} 