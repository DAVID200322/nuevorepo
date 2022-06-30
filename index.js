const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express por Dvid');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy la ruta de David');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
