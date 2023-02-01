var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema2 = new Schema(
    {
      Project1: {
        type: mongoose.Schema.Types.Mixed,
      },
      Project: {
          type: mongoose.Schema.Types.Mixed,
        },
        Model: {
          type: mongoose.Schema.Types.Mixed,
        },
        Design: {
          type: mongoose.Schema.Types.Mixed,
        },
        NominalTorque: {
          type: Number,
        },
        JJ01: {
          type: Number,
        },
      file1: {
        type: String,
      },
      file2: {
        type: String,
      },
      file3: {
        type: String,
      },
      file4: {
        type: String,
      },

     
    },
    { collection: "SamG" }
  );

  module.exports = mongoose.model("Item2", itemSchema2);