import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import classroomRoutes from "./routes/classroomRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || "mongodb+srv://ananyashrikanth32_db_user:Viji%40221975@classroomdb.ur8sqfb.mongodb.net/";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

app.use("/classrooms", classroomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
