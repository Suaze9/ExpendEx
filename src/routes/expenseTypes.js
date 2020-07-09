const express = require('express');
const router = express.Router();
const validate = require('../helpers/tokenauth');

router.get('/', validate, (req, res) => {
    console.log(req.auth);
    res.status(200).send(req.auth._id);
})

module.exports = router;