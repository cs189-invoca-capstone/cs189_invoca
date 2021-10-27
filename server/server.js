const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/public')))

app.get("/server", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to server" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'))
})