module.exports = {
    verbose: true,
    setupFiles: ['./tests/setup.js'],
    transform: {
      "^.+\\.js?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    }
};