const express = require('express');
const path = require('path');

const multer  = require('multer');
const upload = multer();
const router = express.Router();


router.get("/", function (request, response) {
  response.sendFile(path.join('/app/views/index.html'));
});

 
router.post('/file', upload.single('upload_file'), function (req, res, next) {
    console.log('body: ',req.body);
    console.log('files: ',req.files);
    res.end();
});

module.exports = router;