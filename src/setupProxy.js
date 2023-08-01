const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth', // PREFIJO PARA LAS PETICIONES KEYCLOAK
    createProxyMiddleware({
      target: 'https://goauth.gerardoortiz.com', // La URL del servidor Keycloak
      changeOrigin: true,
    })
  );
};
