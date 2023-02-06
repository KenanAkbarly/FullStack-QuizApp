const express = require('express');
const app = express();
require("dotenv").config();
app.use(express.json());

const dbConfig = require('./config/dbConfig')

const userRoute = require('./routes/usersRoute');

app.use('/api/users', userRoute)
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
})