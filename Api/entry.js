const express = require("express");
const Entries = require("../models/entry");

const router = express.Router();

//Route: POST /api/entries
//Desc: create a new entry
//Access: public

router.post("/", async (req, res) => {
  const { name, catagory, payee, owed, paymentDay, payed, interval } = req.body;

  const entryFields = {};
  if (name) entryFields.name = name;
  if (catagory) entryFields.catagory = catagory;
  if (payee) entryFields.payee = payee;
  if (owed) entryFields.owed = owed;
  if (paymentDay) entryFields.paymentDay = paymentDay;
  if (payed) entryFields.payed = payed;
  if (interval) entryFields.interval = interval;

  try {
    let entry = await Entries.findOne({ _id: req.body._id });
    if (entry) {
      entry = await Entries.findOneAndUpdate(
        { _id: req.body._id },
        { $set: entryFields },
        { new: true }
      );
      return res.json(entry);
    }

    entry = new Entries(entryFields);
    await entry.save();
    res.json(entry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//Route: GET /api/entries
//Desc: get all entries
//Access: public
router.get("/", async (req, res) => {
  try {
    const entries = await Entries.find();
    res.json(entries);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//Route: GET /api/entries
//Desc: get entry buy id
//Access: public
router.get("/:id", async (req, res) => {
  try {
    const entry = await Entries.findById(req.params.id);
    res.json(entry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//Route: DELETE /api/entries
//Desc: Delete entry by id
//Access: public
router.delete("/", async (req, res) => {
  try {
    await Entries.findByIdAndDelete({
      _id: req.body._id,
    });
    res.status(200).json({ msg: "Entry Deleted" });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
