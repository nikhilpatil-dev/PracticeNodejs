const express = require('express');
const app = express();
const userRoutes = require('./Route/userRoute');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
