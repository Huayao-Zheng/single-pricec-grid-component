module.exports = {
  content: ['index.html'],
  theme: {
    fontSize: {
      sm: ['14px', { letterSpacing: '-0.17px', lineHeight: '26px' }],
    },
    extend: {
      colors: {
        Cyan: 'hsl(179, 62%, 43%)',
        'Bright-Yellow': 'hsl(71, 73%, 54%)',
        'Light-Gray': 'hsl(204, 43%, 93%)',
        'Grayish-Blue': 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      boxShadow: {
        'join-community': '0px 15px 30px rgba(0, 81, 171, 0.148847)',
      },
    },
  },
  plugins: [],
};
