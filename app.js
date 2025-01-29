const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const app = express();
//add morgan 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());





app.use('/', (req, res,next) => {
    res.send('Hello, welcome to Task amnagement API');
  });



module.exports = app;