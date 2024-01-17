const app = require('./app');

const port = app.get('PORT');

app.listen(port, () => console.log(`Server running at port ${port}`));
