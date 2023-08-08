const express = require('express');
const dotenv= require('dotenv')
const app = express();
const cors= require('cors');
const { connection } = require('mongoose');

const CorsOption={
    origin:true,
    credentials:true,
  };

app.use('*',cors(CorsOption));
dotenv.config({path:"config.env"});
require('../dbconnection/connection');

app.use(express.json());

const port = 3004;

app.use(require('../nodejs/api/usermodel'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });