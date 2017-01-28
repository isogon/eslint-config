module.exports = {
  env: {
    // Our react should run on the server as well
    // Force checks that browser globals exist
    browser: false,
  },
  rules: {
    // We only want to use .js files, never use .jsx
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
        ],
      },
    ],
  },
};
