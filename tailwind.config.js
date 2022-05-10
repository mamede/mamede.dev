module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins'],
      },
      borderRadius: {
        animated: '60% 40% 30% 70%/60% 30% 70% 40%;',
      },
      keyframes: {
        morph: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
      },
      animation: {
        avatar: 'morph 8s ease-in-out 1s infinite;',
      },
      boxShadow: {
        animate: 'inset 0 0 0 6px hsl(0deg 0% 100% / 30%)',
      },
    },
  },
  plugins: [],
};
