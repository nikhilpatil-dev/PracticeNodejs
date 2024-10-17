const db = require('../config/db');


const getUsers = (callback) => {
  const query = 'SELECT * FROM users'; 

  
  db.query(query, (err, result) => {
    if (err) {
      return callback(err);  
      }
    callback(null, result); 
  });
};

const insertUser = (userData, callback) => {
    const sql = 'INSERT INTO users SET ?';
    db.query(sql, userData, (err, result) => {
      if (err) {
        console.error('Database insert error:', err);
        return callback(err, null);
      }
      console.log('Insert result:', result);
      callback(null, result);
    });
  };
  const updateUser = (id, userData, callback) => {
    const sql = 'UPDATE users SET ? WHERE id = ?';
    db.query(sql, [userData, id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  };
  const getUserById = (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result[0]);
    });
  };
  const deleteUser = (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  };
  
module.exports = { getUsers, insertUser, updateUser, getUserById, deleteUser };

