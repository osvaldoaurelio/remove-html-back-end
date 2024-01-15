const { app, port } = require('./app');

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
