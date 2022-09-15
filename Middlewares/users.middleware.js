//Import Models
const { User } = require('../Models/user.model');

const userExists = async (req, res, next) => {
  try {
    const { id } = req.params

    //check if user exists before update
    const user = await User.findOne({ where: { id } });

    //if user does not exist - sent error
    if (!user) {
      return res.status(404).json({
        status: '<-ERROR->',
        message: 'USER does not Exist',
      });
    }
    //export any props from the middleware
    req.user = user;

    next();
  } catch (err) {
    console.log(err)
  }
};

module.exports = { userExists };