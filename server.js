
const express = require("express");


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to my Express server!");
});

// GET API
app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    users: [
      { id: 1, name: "Faisal" },
      { id: 2, name: "Ali" },
    ],
  });
});

// POST API
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required",
    });
  }

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: { name, email },
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
