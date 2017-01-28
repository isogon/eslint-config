module.exports = {
  globals: {
    expect: true,
  },
  rules: {
    // Chai expectations often use getters for the side effect of throwing an error
    'no-unused-expressions': 'off',
  },
};
