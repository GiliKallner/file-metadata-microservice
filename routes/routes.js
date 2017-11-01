const express = require('express');
const path = require('path');

const multer  = require('multer');
const upload = multer();
const router = express.Router();


router.get("/", function (request, response) {
  response.sendFile(path.join('/app/views/index.html'));
});

router.post('/file', upload.single('myfile'), (req, res) =>{
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({size:req.file.size},null,3));
});

module.exports = router;
