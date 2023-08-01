const express = require('express');
const app = express();

// Configurar la directiva frame-ancestors en el encabezado de respuesta HTTP
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 'frame-ancestors https://goauth.gerardoortiz.com');
  next();
});

// Resto de la configuración del servidor y rutas
// ...

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor de desarrollo de React en funcionamiento en el puerto 3000');
});