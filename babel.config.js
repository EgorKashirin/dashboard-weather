module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-typescript",
    //'@babel/preset-react', // react < 17
    // uncomment following code to use it with react >= 17
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ];
  const plugins = [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["react-hot-loader/babel"],
    ["@babel/plugin-proposal-class-properties"],
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
      },
    ],
    [
      "babel-plugin-styled-components",
      {
        displayName: true,
        fileName: true,
      },
    ],
    // '@babel/proposal-class-properties',
    // '@babel/proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};
