/** @type {import('next').NextConfig} */

const path = require('path');
const getKeys = require('./sass/sassVariablesInjector');
const { theme } = require('./src/theme/theme.js');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    functions: {
      'getThemeVariable($keys)': getKeys(theme),
    },
  },
};

module.exports = nextConfig;
