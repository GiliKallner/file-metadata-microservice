const express = require('express');

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const path = require('path');


router.get("/", function (request, response) {
  response.sendFile(path.join('/app/views/index.html'));
});

router.post('/file',upload.single('avatar'), (req,res)=>{
    console.log('body: ',req.body);
    console.log('files: ',req.files);
  res.end();
});

module.exports = router;