const router = require('express').Router();
const User = require("../models/users");
const Task = require('../models/task');
router.post('/create-task', async(req, res)=>{
    try {
        const {title, descp} = req.body;
        const {id} = req.headers;
        const newTask = new Task({title: title, descp: descp});
        const savedTask = await newTask.save();
        const taskid = savedTask._id;
        await User.findByIdAndUpdate(id, {$push: {tasks:taskid._id}})
        res.status(200).json({
            message: 'task created',
        });
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
module.exports = router;