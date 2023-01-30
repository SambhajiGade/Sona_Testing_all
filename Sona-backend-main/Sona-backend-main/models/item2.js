var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema2 = new Schema(
    {
      files: {
        type: Array,
      },
     
    },
    { collection: "users" }
  );

  module.exports = mongoose.model("Item2", itemSchema2);