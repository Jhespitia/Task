//Import Model
const { Task } = require('../Models/task.model');

//Create Task
const createTask = async (req, res) => {
  try {
    const { title, userId, startDate,
      limitDate, finishDate } = req.body;

    const newTask = await Task.create({
      title,
      userId,
      startDate,
      limitDate,
      finishDate,
    })

    res.status(201).json({
      status: '!NEW TASK CREATED!',
      data: { newTask },
    })
  } catch (err) {
    console.log(err)
  }
};

//Get All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()

    res.status(200).json({
      status: '!SUCCESS! - ALL TASKS',
      data: { tasks },
    });
  } catch (err) {
    console.log(err);
  }
};

//Get Task by Status
const getTaskByStatus = async (req, res) => { };

//Update Task
const updateTaskById = async (req, res) => {
  try {
    const { status } = req.body

    const { id } = req.params

    //check if registry exists before update
    const task = await Task.findOne({ where: { id } });

    //if registry does not exist - sent error  
    if (!task) {
      return res.status(404).json({
        status: '<-ERROR->',
        message: 'Registry deos not Exist',
      });
    }
    //update task
    await task.update({ status });
    res.status(200).json({
      status: '!SUCCESS!',
      data: { task }
    });
  } catch (err) {
    console.log(err);
  }
};

//Cancel Task
const cancelTask = async (req, res) => { };

module.exports = {
  createTask,
  getAllTasks
};