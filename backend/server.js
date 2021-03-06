const express = require("express");
const mongoose = require("mongoose");
const commentsRouter = require("./routes/api/comments");
const usersRouter = require("./routes/api/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/api/comments", commentsRouter);
app.use("/api/users", usersRouter);

app.listen(port, () => console.log(`Listening on localhost:${port}`));
