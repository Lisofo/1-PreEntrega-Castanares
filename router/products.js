// products.js
const express = require('express');
const router = express.Router();
const ProductManager = require('./ProductManager');

const productManager = new ProductManager('../products.json');

router.post('/', (req, res) => {
  const {
    title,
    description,
    code,
    price,
    status = true,
    stock,
    category,
    thumbnails = [],
  } = req.body;

  if (!title || !description || !code || !price || !stock || !category) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const newProduct = {
    id: productManager.getNextId(),
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnails,
  };

  productManager.addProduct(newProduct);

  res.status(201).json(newProduct);
});

router.put('/:pid', (req, res) => {
  const pid = req.params.pid;
  const updatedFields = req.body;

  if ('id' in updatedFields) {
    return res.status(400).json({ error: 'No se puede actualizar el id' });
  }

  const updatedProduct = productManager.updateProduct(pid, updatedFields);

  if (!updatedProduct) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(updatedProduct);
});

router.delete('/:pid', (req, res) => {
  const pid = req.params.pid;
  const deletedProduct = productManager.deleteProduct(pid);

  if (!deletedProduct) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(deletedProduct);
});

module.exports = router;