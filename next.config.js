const withOffline = require("next-offline");

module.exports = withOffline({
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "svg-url-loader",
          options: {
            // Inline files smaller than 10 kB
            limit: 10 * 1024,
            noquotes: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: 8192,
            fallback: require.resolve("file-loader"),
            publicPath: `/_next/static/chunks/fonts/`,
            outputPath: `${isServer ? "../" : ""}devstatic/chunks/fonts/`,
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico|webp|jp2)$/,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: 8192,
            fallback: require.resolve("file-loader"),
            publicPath: `/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
});
