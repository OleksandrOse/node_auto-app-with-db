'use strict';

module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/pages/about',
      },
    ];
  },
  optimizeFonts: true,
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    PORT: process.env.PORT,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  },
};
