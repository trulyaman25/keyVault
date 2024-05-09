import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://amanwhoooo:16MZ3UNRyDEF93rd@cluster0.vygshnz.mongodb.net/keyVault')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const passwordSchema = new mongoose.Schema({
  userId: String,
  website: String,
  username: String,
  password: String,
});

const Password = mongoose.model('Password', passwordSchema);

app.post('/api/passwords', async (req, res) => {
  try {
    const { userId, website, username, password } = req.body;
    const newPassword = new Password({ userId, website, username, password });
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(500).json({ error: 'Error saving password' });
  }
});

app.get('/api/passwords', async (req, res) => {
  try {
    const { userId } = req.query;
    const passwords = await Password.find({ userId });
    res.status(200).json(passwords);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching passwords' });
  }
});

app.delete('/api/passwords/:id', async (req, res) => {
  try {
    await Password.findOneAndDelete({ _id: req.params.id, userId: req.query.userId });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
