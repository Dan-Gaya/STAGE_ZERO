const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const app = express();
//add morgan 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

const infoRoutes = require('./Routes/info_Route')

app.use('/',infoRoutes);
//app.use('/', (req, res,next) => {
  //  res.send('Hello, welcome to HNG STAGE ZERO. visit https://stage-zero-lilac.vercel.app/api ');
//  });

//error handling

app.use((error,req,res,next) =>{
    res.status(500).json({
        message: 'Server in the main app failed to start',
        error: error.message,
    });
});


module.exports = app;
