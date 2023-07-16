const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },

    configure: (webpackConfig, { paths }) => {
      const packagePath = path.resolve(__dirname, 'packages/common');
      const rule = webpackConfig.module.rules.find(rule =>
        rule.oneOf && rule.oneOf.some(oneOf =>
          oneOf.loader && oneOf.loader.includes('babel-loader')
        )
      );

      if (rule) {
        rule.oneOf.forEach(oneOf => {
          if (oneOf.loader && oneOf.loader.includes('babel-loader')) {
            oneOf.include = Array.isArray(oneOf.include)
              ? [...oneOf.include, packagePath]
              : oneOf.include ? [oneOf.include, packagePath] : [packagePath];
          }
        });
      }

      return webpackConfig;
    }
  }
};
