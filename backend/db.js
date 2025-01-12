// To connect with the db ,mongo db server

const mongoose = require("mongoose");
const mongoURI =
  "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

//async await ->promise resolver
// const connectToMongo = () => {
//   mongoose.connect(mongoURI, () => {
//     console.log("connected to mongo successfully");
//   });
// };
//to make the database connection.

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectToMongo;
