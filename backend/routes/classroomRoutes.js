import express from "express";
import Classroom from "../models/Classroom.js";

const router = express.Router();

// 📌 GET all classrooms (or filter by building ?building=SMV)
router.get("/", async (req, res) => {
  const { building } = req.query;
  try {
    let classrooms;
    if (building) {
      classrooms = await Classroom.find({ building });
    } else {
      classrooms = await Classroom.find();
    }
    res.json(classrooms);
  } catch (err) {
    res.status(500).json({ message: "Error fetching classrooms", error: err.message });
  }
});

// 📌 POST new classroom
router.post("/", async (req, res) => {
  try {
    const { roomNo, building, floor } = req.body;

    if (!roomNo || !building || floor === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Prevent duplicate room numbers
    const existing = await Classroom.findOne({ roomNo });
    if (existing) {
      return res.status(400).json({ message: "Classroom already exists" });
    }

    const classroom = new Classroom({ roomNo, building, floor });
    await classroom.save();

    res.status(201).json({
      message: "Classroom added successfully",
      classroom,
    });
  } catch (err) {
    res.status(500).json({ message: "Error adding classroom", error: err.message });
  }
});
// 📌 Search classroom by roomNo
router.get("/search", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: "Room number is required" });
    }

    const classroom = await Classroom.findOne({ roomNo: name });
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    res.json(classroom);
  } catch (err) {
    res.status(500).json({ message: "Error searching classroom", error: err.message });
  }
});

export default router;
