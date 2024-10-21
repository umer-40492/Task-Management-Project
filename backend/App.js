const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const UserAPI = require("./routes/user")
const TaskAPI = require("./routes/task")
require('./connection/connect');
app.use('/api/v1', UserAPI);
app.use('/api/v1', TaskAPI);
app.use('/', (req, res) =>{
    res.send('hello form backend');
});
const port = 4000;
app.listen(port, ()=>{
    console.log('server running');
});