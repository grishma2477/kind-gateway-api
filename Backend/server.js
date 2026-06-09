const express = require("express");

const app = express();
const PORT = 3200;

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to my Node.js Backend!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});