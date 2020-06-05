module.exports = {
  devServer: {
    proxy: {
      '/auth': {
        target: 'http://localhost:8000/',
        changeOrigin: false,
      },
      '/api': {
        target: 'http://localhost:8000/',
        changeOrigin: false,
      },
    },
  },
};
