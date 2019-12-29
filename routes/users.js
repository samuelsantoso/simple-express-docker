const express = require('express');
const router = express.Router();
const userModel = require('../models/users/schema');

router.get('/', async function (req, res, next) {
  try {
    const users = await userModel.find({});
    const mappedUser = users.map(user => ({
      name: user.name,
      address: user.address
    }));

    res.send({
      message: 'User Created',
      users: mappedUser
    });

  } catch (e) {
    res.send()
  }
    res.send('respond with a resource');
});

router.post('/', async (req, res, next) => {
    const {body} = req;
    try {
        await userModel.create(body);
        res.send({
            message: 'User Created',
            name: body.name
        });

    } catch (e) {
      res.send()
    }
});

router.put('/', async (req, res, next) => {
    const {name, address} = req.body;
    try {
        await userModel.updateOne({name}, {address});
        res.send(`user name ${name} updated`);
    } catch (e) {
        res.send(`Error Happen while updating ${name}`);
    }
});

router.delete('/', async (req, res, next) => {
    const {name} = req.body;
    try {
        await userModel.deleteMany({name});
        res.send(`user name ${name} deleted`);
    } catch (e) {
        res.send(`Error Happen while updating ${name}`);
    }
});

module.exports = router;
