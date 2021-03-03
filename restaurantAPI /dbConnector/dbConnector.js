const mongoose = require("mongoose");
const mongodb_url = "mongodb://localhost:27017/viaplay";

module.exports = mongoose.connect(
  mongodb_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  function (error) {
    if (error) return console.log(error);
    console.log("Connected");
  }
);
