import express from "express";
import mongoose from "mongoose";
import  cors from "cors";
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect( "mongodb+srv://amanwhoooo:vT5ecPe5ZtH4fMYu@cluster0.vygshnz.mongodb.net/keyVault")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    res.json("exist");
  } else {
    res.json("notexist");
  }
});

app.post("/signup", async (req, res) => {
  const { fullname , username, email,password } = req.body;
  const user = await User.findOne({ username });

  if (user) res.json("exist");
  else {
    try {
      const newUser = new User({ fullname, username, email,password });
      await newUser.save();
      res.json("notexist");
    } catch (error) {
      console.error(error);
      res.json("Error creating user");
    }
  }
});

app.listen(3000, () => console.log("server is running on port 3000"));
