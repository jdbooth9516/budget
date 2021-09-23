const mongoose = require("mongoose");

const db = "mongodb+srv://jdbooth9516:hitokiri1@webdev.abe3j.mongodb.net/Budget?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected... ");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
