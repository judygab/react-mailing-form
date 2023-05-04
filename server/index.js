const path = require('path');
const express = require("express");
const cors = require('cors')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors())

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

// Showing that the server is up and running
app.listen(PORT, () => {
    console.log(`Server is online on port: ${PORT}`)
  })