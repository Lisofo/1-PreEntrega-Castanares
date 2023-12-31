// index.js
const express = require('express');
const app = express();
const port = 8080;

const productsRouter = require('./products');
const cartsRouter = require('./carts');

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
