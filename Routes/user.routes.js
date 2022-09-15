//Import Express
const express = require('express');

const usersRouter = express.Router();

//Import Model
const { User } = require('../Models/user.model');

//Import Controllers
const {
  createUser,
  getActiveUsers,
  updateUser,
  disableUser } = require('../Controllers/users.controller');

//Import Middlewares
const { userExists } = require('../Middlewares/users.middleware');

//EndPoints Users
//Create users
usersRouter.post('/', createUser);

//Get Active Users
usersRouter.get('/', getActiveUsers);

//Update User
usersRouter.patch('/:id', userExists, updateUser);

//Disable User
usersRouter.delete('/:id', userExists, disableUser);

module.exports = { usersRouter };