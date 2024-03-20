module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    'react/prop-types': 'error',
  },
};