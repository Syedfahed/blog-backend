const { mongoose } = require("mongoose");

// mongoDB connection
const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI, // replace with your connection
      {
        useNewUrlParser: false,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
