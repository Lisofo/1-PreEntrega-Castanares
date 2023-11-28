// carts.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {

  const { products = [] } = req.body;

  const newCart = {
    id: generateUniqueId(),
    products,
  };



  res.status(201).json(newCart);
});

router.get('/:cid', (req, res) => {

  const cid = req.params.cid;

});

router.post('/:cid/product/:pid', (req, res) => {

  const cid = req.params.cid;
  const pid = req.params.pid;
  const { quantity = 1 } = req.body;

});

module.exports = router;