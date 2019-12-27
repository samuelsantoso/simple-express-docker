const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  res.send(`user post ${req}`);
});

router.put('/', (req, res, next) => {
  res.send('user put');
});

router.delete('/', (req, res, next) => {
  res.send('user delete');
});

module.exports = router;
