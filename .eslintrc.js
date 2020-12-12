module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, parser: 'typescript', endOfLine: 'auto' },
    ],
    'comma-dangle': ['off'],
  },
};
