const express = require("express");

const dotenv = require("dotenv");
const chats = require("./data/data");
const app = express();
dotenv.config();
const colors = require("colors");

const useRoutes = require("./routes/userRoute");
const connectDB = require("./Config/db");

const { notfound, errorHandler } = require("./middleware/errorMiddleware");
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("ApI is Running");
});

app.use("/api/user", useRoutes);

app.use(notfound);
app.use(errorHandler);

// app.get("/api/chat", (req, res) => {
//   // console.log(chats);
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   // console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));
