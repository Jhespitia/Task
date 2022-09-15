//Import Model
const { User } = require('../Models/user.model');

//Create User
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({
      name,
      email,
      password
    })

    res.status(201).json({
      status: '!NEW USER CREATED!',
      data: { newUser },
    });
  } catch (err) {
    console.log(err);
  }
};

//Get Active Users
const getActiveUsers = async (req, res) => {
  try {
    const users = await User.findAll()

    res.status(200).json({
      status: '!SUCCESS!',
      data: { users },
    });
  } catch (err) {
    console.log(err);
  }
};

//Update User (Name - Email)
const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    //import props from the middleware
    const { user } = req;

    //if user exists - update it
    await user.update({ name, email });
    res.status(200).json({
      status: '!USER UPDATED!',
      data: { user }
    });
  } catch (err) {
    console.log(err);
  }
};

//Disable User
const disableUser = async (req, res) => {
  try {

    //import props from the middleware
    const { user } = req;

    //disable user
    await user.update({ status: "DISABLE" });
    res.status(200).json({
      status: '!USER HAS BEEN DISABLE!',
      data: { user }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
  getActiveUsers,
  updateUser,
  disableUser
};