const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para sa JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files mula sa 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route para i-redirect ang lahat ng requests sa index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NEO App server is running on port ${PORT}`);
});
