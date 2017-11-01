const express = require('express');
const path = require('path');

const multer  = require('multer');
const upload = multer();
const router = express.Router();


router.get("/", function (request, response) {
  response.sendFile(path.join('/app/views/index.html'));
});

router.Promise = global.Promise;

router.post('/', upload.single('myfile'), function (req, res) {
    console.log('body: ',req.body);
    console.log('files: ',req.file);
    res.send('');
});

module.exports = router;
