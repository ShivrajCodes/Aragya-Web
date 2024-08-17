module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#0d0d18',
        'custom-purple': '#200423',
        'custom-dark-purple': '#0d021f',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        reveal: 'reveal 1s ease-out forwards',
        pulse: 'pulse 1.5s infinite',
        'pulse-fast': 'pulse 1s infinite', 
      },
    },
  },
  plugins: [],
};
