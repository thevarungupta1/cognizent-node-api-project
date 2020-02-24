const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');

mongoose.connect(
  "mongodb://localhost:27017/employeeDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log("mongodb could not connect");
    } else {
      console.log("mongodb connected");
    }
  }
);

const exployeeRoutes = require("./routes/employee");

// Express
const app = express();

/**
 * Default Route
 */
app.get("/", (req, res) => {
  //res.send('API is up and running');
  res.status(200).json({
    error: false,
    message: "Api is up and ruuning"
  });
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/employee", exployeeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
