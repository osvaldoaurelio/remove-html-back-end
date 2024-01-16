const { app, port } = require('./app');

app.listen(port, () => console.log(`Using port = ${port}`));
