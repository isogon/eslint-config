module.exports = {
  env: {
    mocha: true,
  },
  rules: {
    // In our tests we often need to load files dynamically
    'global-require': 'off',
  },
};
