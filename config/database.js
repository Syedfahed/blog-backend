const { mongoose } = require("mongoose");

// mongoDB connection
const dbConnection = () => {
  mongoose.connect(
    process.env.MONGODB_URI, // replace with your connection
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = dbConnection;
