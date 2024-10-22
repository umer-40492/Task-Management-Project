const router = require('express').Router();
const User = require("../models/users");
const Task = require('../models/task');
const authenticateToken = require('./auth');
router.post('/create-task', authenticateToken, async(req, res)=>{
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
//all task
router.get('/get-all-task', authenticateToken, async(req, res)=>{
    try {
       const {id} = req.headers;
       const userData = await User.findById(id).populate({path:"tasks",
        options: {sort: {createdAt: -1}} 

       });
       res.status(200).json({data: userData})
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
// detele task
router.delete('/delete-task/:id', authenticateToken, async(req, res)=>{
    try {
       const {id} = req.params;
       const userID = req.headers.id;
       await Task.findByIdAndDelete(id);
       await User.findByIdAndUpdate(userID, {$pull: {tasks: id}})
       res.status(200).json({message: 'task deleted successfully'})
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
 //update task
 router.put('/update-task/:id', authenticateToken, async(req, res)=>{
    try {
       const {id} = req.params;
       const {title, descp} = req.body;
       await Task.findByIdAndUpdate(id, {title: title, descp: descp})
       res.status(200).json({message: 'task updated successfully'})
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
// update important task
router.put('/important-task/:id', authenticateToken, async(req, res)=>{
    try {
       const {id} = req.params;
       const taskData = await Task.findById(id);
       const importanttask = taskData.important;
       await Task.findByIdAndUpdate(id, {imporant: !importanttask})
       res.status(200).json({message: 'task updated successfully'})
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
// update complete task
router.put('/complete-task/:id', authenticateToken, async(req, res)=>{
    try {
       const {id} = req.params;
       const taskData = await Task.findById(id);
       const completetask = taskData.complete;
       await Task.findByIdAndUpdate(id, {complete: !completetask})
       res.status(200).json({message: 'task updated successfully'})
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
//important task
router.get('/get-imp-task', authenticateToken, async(req, res)=>{
    try {
       const {id} = req.headers;
       const impData = await User.findById(id).populate({path:"tasks",
        match: {important: true},
        options: {sort: {createdAt: -1}} 

       });
       const imptaskData = impData.tasks;
       res.status(200).json({data: imptaskData})
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
//complete tasks
router.get('/get-complete-task', authenticateToken, async(req, res)=>{
    try {
       const {id} = req.headers;
       const data = await User.findById(id).populate({path:"tasks",
        match: {complete: true},
        options: {sort: {createdAt: -1}} 

       });
       const completeTask = data.tasks;
       res.status(200).json({data: completeTask})
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
//get incompletedtask
router.get('/get-incomplete-task', authenticateToken, async(req, res)=>{
    try {
       const {id} = req.headers;
       const data = await User.findById(id).populate({path:"tasks",
        match: {complete: false},
        options: {sort: {createdAt: -1}} 

       });
       const incompleteTask = data.tasks;
       res.status(200).json({data: incompleteTask})
    } catch (error) {
        res.status(400).json({
            message: 'internal server error'
        });
    }
})
module.exports = router;