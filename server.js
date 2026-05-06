const express = require("express");
const validateRegister = require("./middleware/validation");

const app = express();
const PORT = 3000;

app.use(express.json());

// route register + middleware validation
app.post("/register", validateRegister, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User registered successfully",
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});