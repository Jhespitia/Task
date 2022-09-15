//Import Express
const express = require('express');

const tasksRouter = express.Router();

//Import Model
const { Task } = require('../Models/task.model');

//Import Controllers
const {
  createTask,
  getAllTasks,
  getTaskByStatus,
  updateTaskById,
  cancelTask } = require('../Controllers/tasks.controller');

//Import Middlewares
// const { taskExists } = require('../Middlewares/tasks.middleware');

//EndPoints Tasks
//Create Task
tasksRouter.post('/', createTask);

//Get All Tasks
tasksRouter.get('/', getAllTasks);

//Get Task by Status
//tasksRouter.get('/:status', getTaskByStatus);

//Update Task
//tasksRouter.patch('/:id', updateTaskById);

//Cancel Task
//tasksRouter.delete('/:id', cancelTask);

module.exports = { tasksRouter };
