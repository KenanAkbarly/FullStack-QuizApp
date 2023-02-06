const express = require('express');
const app = express();
require("dotenv").config();


console.log(process.env.MONGO_URL)

const dbConfig = require('./config/dbConfig')
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
})