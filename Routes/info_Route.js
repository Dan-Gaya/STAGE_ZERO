const express = require('express');
const router = express.Router();
const DisplayInfo = require('../Controller/info')


router.get('/',DisplayInfo);


module.exports = router;