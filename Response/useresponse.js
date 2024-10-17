const successResponse = (res, data) => {
    res.status(200).json({ success: true, data });
  };
  
  const errorResponse = (res, message) => {
    res.status(500).json({ success: false, message });
  };
  
  module.exports = { successResponse, errorResponse };
  