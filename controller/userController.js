const userModel = require('../model/userRepository')

const { successResponse, errorResponse } = require('../Response/useresponse');

const getAllUsers = (req, res) => {
  userModel.getUsers((err, users) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch users' }); // Send error response if any
    }
    res.json(users); // Send users data in response
  });
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  userModel.insertUser({ name, email }, (err, result) => {
    if (err) return errorResponse(res, 'Error inserting user');
    successResponse(res, { message: 'User created', userId: result.insertId });
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  userModel.updateUser(id, { name, email }, (err, result) => {
    if (err) return errorResponse(res, `Error updating user ${err}`);
    successResponse(res, { message: 'User updated' });
  });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  userModel.getUserById(id, (err, user) => {
    if (err) return errorResponse(res, 'Error fetching user');
    if (!user) return errorResponse(res, 'User not found', 404);
    successResponse(res, user);
  });
};
const deleteUser = (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id, (err, result) => {
    if (err) return errorResponse(res, 'Error deleting user');
    successResponse(res, { message: 'User deleted' });
  });
};



module.exports = { getAllUsers,createUser,updateUser,getUserById,deleteUser };

