const express = require("express");
const router = express.Router();
const productcontroller = require("../Controller/product");
const multer = require("multer");
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Public"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});


const upload = multer({ storage: storage });

router.use(express.static(path.join(__dirname, 'Public')));

router.post('/Public', upload.single(), (req, res) => {
  res.send('File uploaded successfully');
});

router.get("/getproduct", productcontroller.mygetproduct);

router.post("/createproduct", upload.single("Image"), productcontroller.mycreateproduct);

module.exports = router;
