var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// var AutoIncrement = require('mongoose-sequence')(mongoose);

var itemSchema1 = new Schema(
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
      GearF1: {
        type: String,
      },
      GearF2: {
        type: String,
      },
      GearP1: {
        type: String,
      },
      GearP2: {
        type: String,
      },
      PinionF1: {
        type: String,
      },
      PinionF2: {
        type: String,
      },
      PinionP1: {
        type: String,
      },
      PinionP2: {
        type: String,
      },

   
    id: { type: Number},
  },
  { collection: "SAM" }
);

// itemSchema1.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});
module.exports = mongoose.model("Item1", itemSchema1);
// module.exports = mongoose.model("Item", itemSchema1)
