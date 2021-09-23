const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

function handleError(error, res) {
  console.error(error.message);
  res.status(500).json({ msg: "Server Error" });
}

connectDB();
app.use(express.json());

app.use(cors());

// Api Routes
app.use("/api/entries", require("./Api/entry"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));

module.exports = handleError;
