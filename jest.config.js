module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
};
