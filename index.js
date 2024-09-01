const express = require("express");
const dbConnection = require("./config/database");
const router = require("./routes/userRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse JSON
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
require("dotenv").config();

// connection
const port = process.env.SERVER //repalce with your URL;

// MongoDB connection
dbConnection();
// routers
app.get('/',(req,res)=>res.send('Runing'))
app.use("/api/", router);

// Start the server
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
