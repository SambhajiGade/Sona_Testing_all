var express = require("express");
var Item1 = require("../models/item1");

var itemRouter1 = express.Router();

itemRouter1
  .route("/items1")
  .post(function (request, response) {
    console.log("POST /items1");

    var item1 = new Item1(request.body);

    item1.save();

    response.status(201).send(item1);
  })
  .get(function (request, response) {
    console.log("GET /items1");

    Item1.find(function (error, items1) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      console.log(items1);

      response.json(items1);
    });
  });

  module.exports = itemRouter1;