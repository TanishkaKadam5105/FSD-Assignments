const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/fashionhub")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Feedback Page
app.get("/feedback", (req, res) => {
    res.sendFile(path.join(__dirname, "feedback.html"));
});

// Save Feedback
app.post("/submit-feedback", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newFeedback = new Feedback({
            name,
            email,
            message
        });

        await newFeedback.save();

        res.send("<h2>Feedback Submitted Successfully</h2><button><a href='/'>Go Home</a></button>");
    } catch (error) {
        res.send("Error Saving Feedback");
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});