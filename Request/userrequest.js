const { body, validationResult} = require('express-validator');
const  validateCreateUser= (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email ) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    next();
  };
  const validateUpdateUser = [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('email').optional().isEmail().withMessage('Email must be a valid email address'),
    
  ];
  
  


  
  module.exports = { validateCreateUser,
    validateUpdateUser
   };
  