const express = require('express');
const router = express.Router();

router.get('/api/test', (req, res) =>{
    res.send("yes");
});

module.exports = router;