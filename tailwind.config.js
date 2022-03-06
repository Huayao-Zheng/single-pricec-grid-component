module.exports = {
  content: ['index.html'],
  theme: {
    fontSize: {
      'sm-1': ['14px', { letterSpacing: '-0.17px', lineHeight: '20px' }],
      'sm-2': ['14px', { letterSpacing: '-0.17px', lineHeight: '26px' }],
      'sm-3': ['15px', { letterSpacing: '-0.19px', lineHeight: '20px' }],
      'md-1': ['16px', { letterSpacing: '-0.2px', lineHeight: '18.7px' }],
      'md-2': ['16px', { letterSpacing: '-0.2px', lineHeight: '26px' }],
      lg: ['18px', { letterSpacing: '-0.22px', lineHeight: '21.04px' }],
      'xl-1': ['20px', { letterSpacing: '-0.25px', lineHeight: '23.38px' }],
      'xl-2': ['24px', { letterSpacing: '-0.3px', lineHeight: '28.06px' }],
      xxl: ['32px', { letterSpacing: '-0.4px', lineHeight: '37.41px' }],
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
        button: '0px 10px 10px rgba(0, 0, 0, 0.0973011)',
      },
    },
  },
  plugins: [],
};
