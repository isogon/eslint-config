// this should only be used for eslint config files
// and ideally is never used outside of this project

module.exports = {
  parser: "babel-eslint",
  extends: [
    'airbnb-base/legacy',
  ],
  rules: {
    'comma-dangle': ['error', 'always'],
  }
}
