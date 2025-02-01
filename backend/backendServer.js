import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://amanwhoooo:n056XcKw6YMWQIyo@cluster0.vygshnz.mongodb.net/keyVault')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const passwordSchema = new mongoose.Schema({
  userId: String,
  website: String,
  websiteType: String,
  username: String,
  email: String,
  password: String,
  comment: String,
});

const Password = mongoose.model('Password', passwordSchema);

app.post('/api/passwords', async (req, res) => {
  try {
    const newPassword = new Password(req.body);
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(500).json({ error: 'Error saving password' });
  }
});

app.get('/api/passwords', async (req, res) => {
  const { userId } = req.query;
  try {
    const passwords = await Password.find({ userId });
    res.status(200).json(passwords);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching passwords' });
  }
});

app.delete('/api/passwords/:id', async (req, res) => {
  try {
    await Password.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});