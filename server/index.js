const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/route.js");

const PORT = 5000; // Hardcoded port number
const MONGODB_URI = "mongodb+srv://ayush2022ca016:jhaaayus@cluster0.v4icccp.mongodb.net/?retryWrites=true&w=majority"; // Hardcoded MongoDB URI

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

app.use("/", userRoutes); // Use user routes for /api/auth

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB connection successfully");
})
.catch((err) => {
    console.error("DB connection error:", err); // Log error if connection fails
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
