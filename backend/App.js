const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

app.use(cors());
const UserAPI = require("./routes/user")
require('./connection/connect');
app.use('/', (req, res) =>{
    res.send('hello form backend');
});
app.use('/api/v1', UserAPI)
const port = 4000;
app.listen(port, ()=>{
    console.log('server running');
});