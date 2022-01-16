const mongoose = require("mongoose");

const connectToDatabase = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected to MongoAtlas");
  } catch (error) {
    console.log("There has been an Error: ", error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
