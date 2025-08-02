const express = require('express');
const path = require('path');

const app = express();

// Serve static files from dist
app.use(express.static(path.join(__dirname, '../dist')));

// Handle SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

module.exports = app;
