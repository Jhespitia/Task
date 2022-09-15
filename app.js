//Import Express
const express = require('express');

//Import Routers - "EndPoints"
const { usersRouter } = require('./Routes/user.routes');

const { tasksRouter } = require('./Routes/task.routes')

//Initialize express app 
const app = express();

//Enable Express to recieve Json data 
app.use(express.json()); // -> Middleware

//EndPoints - Users
app.use('/api/v1/users', usersRouter);

//EndPoints - Tasks
app.use('/api/v1/tasks', tasksRouter);


//Catch Error NON-existing Endpoint
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} The EndPoint you request does not exist in our server`,
  })
});

module.exports = { app }