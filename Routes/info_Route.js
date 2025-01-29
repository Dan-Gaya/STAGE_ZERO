const express = require('express');
const router = express.Router();
// const {DisplayInfo} = require('../Controller/info')
const DisplayInfo = require('../Controller/info')


router.get('/info',DisplayInfo);


module.exports = router;