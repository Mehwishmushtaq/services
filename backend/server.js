const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const emailRoutes = require("./routes/emaiRoutes");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: ["https://services-lilac.vercel.app"],
  credentials: true, //access-control-allow-credentials:true
  methods: ["POST", "GET"],
  optionSuccessStatus: 200,
};



// middleware
app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

// MongoDB Connection
mongoose.connect("mongodb+srv://Mehwishmushtaq311:0ltwgWuJPdPxTVQw@blog.c09u1.mongodb.net/?retryWrites=true&w=majority&appName=blog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", BlogSchema);

// Get all blog posts
app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// // Update a blog
// export const updateBlog = async (id, updatedBlog) => {
//   const response = await axios.put(`${API_URL}/${id}`, updatedBlog);
//   return response.data;
// };

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Create a new blog post
app.post("/api/blogs", async (req, res) => {
  const newBlog = new Blog(req.body);
  await newBlog.save();
  res.json(newBlog);
});


//Signup and login
app.use("/email", emailRoutes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });
module.exports = app;