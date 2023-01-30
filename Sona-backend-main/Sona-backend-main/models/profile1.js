var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema1 = new Schema(
    {
      files: {
        type: Array,
      },
     
    },
    { collection: "users" }
  );

  module.exports = mongoose.model("profile1", itemSchema1);