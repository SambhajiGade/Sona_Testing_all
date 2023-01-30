// var express = require("express");
// const multer = require('multer');

// var itemRouter1 = express.Router(); 

// const upload = multer({ dest: '../models/uploads/' })

// itemRouter1.post('/profile1', upload.single('avatar'), function (req, res, next) {
//     // req.file is the `avatar` file
//     console.log("file : ",req.file.filename)
//     // req.body will hold the text fields, if there were any
//   })

//   module.exports = itemRouter1;


let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  ItemRouter2 = express.Router();
const DIR = '../models/uploads/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    // const fileName = file.originalname.toLowerCase().split(' ').join('-');
    const fileName = file.fileName;
    cb(null, fileName)
  }
});
var upload = multer({
  storage: storage,
  // fileFilter: (req, file, cb) => {
  //   if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //     return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  //   }
  // }
});
// User model
let User = require('../models/item2');
ItemRouter2.route('/items2').post(upload.array('files', 10), (req, res, next) => {
  const reqFiles = []
  // const url = req.protocol + '://' + req.get('host')
  // for (var i = 0; i < req.files.length; i++) {
  //   reqFiles.push(url + "../models/uploads/" + req.files[i].filename)
  // }
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    files: reqFiles
  });
  user.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Done upload!",
      userCreated: {
        _id: result._id,
        files: result.files
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})
ItemRouter2.route('/items2').get( (req, res, next) => {
  User.find().then(data => {
    res.status(200).json({
      message: "Data fetched!",
      users: data
    });
  });
});
module.exports = ItemRouter2;