const mongoose = require("mongoose");
const { Schema } = mongoose;

const EntrySchema = new Schema({
  name: String,
  catagory: String,
  payee: String,
  owed: Number,
  paymentDay: Number,
  payed: Number,
  interval: String,
});

const Entries = mongoose.model("entry", EntrySchema);

module.exports = Entries;
