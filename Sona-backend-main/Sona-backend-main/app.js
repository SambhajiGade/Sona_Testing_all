var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var itemRouter = require('./routers/item');
var itemRouter1 = require('./routers/item1')
var itemRouter2 = require('./routers/item2')
const multer = require('multer');
var cors = require('cors');
const { response } = require('express');


var app = express();

// const upload = multer({ storage:multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,"uploads")
//   },
//   filename:function(req,file,cb){
//     cb(null,file.fieldname)
//   }
// }) }).single("file")



// app.post('/profile', upload, (req, res)=> {

//   res.send("file uploaded")
//   console.log("file uploaded...")
//   // req.file is the `avatar` file
//   // console.log("file : ",req.file.filename)
//   // console.log(res);
//   // console.log(next)
//   // req.body will hold the text fields, if there were any
// })



app.use(cors())
var PORT = 8083;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'shoppingList';

//mongoose.connect('mongodb+srv://rishi:rMQXtq0YmVXree5h@cluster0.rp4mxa9.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect("mongodb+srv://sambhaji:fEbIPeqwRZY5IHD2@cluster0.udlysxy.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', itemRouter);
app.use('/api',itemRouter1);
app.use('/api',itemRouter2);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
