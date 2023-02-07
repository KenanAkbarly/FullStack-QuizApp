const express = require('express');
const app = express();
require("dotenv").config();
app.use(express.json());

const dbConfig = require('./config/dbConfig')

const usersRoute = require('./routes/usersRoute');

app.use('/api/users', usersRoute)
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
})