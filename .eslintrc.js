module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true
  },
  rules: {
    "linebreak-style": 0,
    "import/no-cycle": [3, { maxDepth: 1 }]
  },
};