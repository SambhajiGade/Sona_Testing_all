var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema2 = new Schema(
    {
      avatar: {
        type: String,
      },
     
    },
    { collection: "SamG" }
  );

  module.exports = mongoose.model("Item2", itemSchema2);