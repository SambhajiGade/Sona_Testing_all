var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AutoIncrement = require('mongoose-sequence')(mongoose);

var itemSchema = new Schema(
  {
    Project: {
      type: mongoose.Schema.Types.Mixed,
    },
    JJ01: {
      type: Number,
    },
    Column3: {
      type: mongoose.Schema.Types.Mixed,
    },
    Report: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column5: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column6: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column7: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column8: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column9: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column10: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column11: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column12: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column13: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column14: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column15: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column16: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column17: {
      type: mongoose.Schema.Types.Mixed,
    },
    Column18: {
      type: mongoose.Schema.Types.Mixed,
    },
   
    Column19: {
      type: mongoose.Schema.Types.Mixed,
    },
    id: { type: Number},
  },
  { collection: "dataItems" }
);

itemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});
module.exports = mongoose.model("Item", itemSchema);
// module.exports = mongoose.model("Item", itemSchema1)
