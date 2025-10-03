import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
  roomNo: { type: String, required: true },
  building: { type: String, required: true },
  floor: { type: Number, required: true },
});

const Classroom = mongoose.model("Classroom", classroomSchema);

export default Classroom;
