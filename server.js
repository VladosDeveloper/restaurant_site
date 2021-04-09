const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const reviews = require("./routers/api/reviews");

// App config
const port = process.env.PORT || 5000;
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/reviews", reviews);
const mongoURI = require("./config/keys").mongoURI;

async function start() {
  try {
    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(port, () => {
      console.log("Server has been started");
    });
  } catch (e) {
    console.log(e.message);
  }
}

start().then(() => {
  console.log("Mongo has been started");
});
