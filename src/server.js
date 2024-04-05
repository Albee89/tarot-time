// server.js

const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from any origin
app.use(cors());

// Alternatively, specify specific origins
// app.use(cors({
//   origin: 'http://your-react-app.com'
// }));

// Add routes and other middleware
// Example:
// app.get('/data', (req, res) => {
//   // Handle JSON data request
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
