const express = require('express');
const path = require('path');

const multer  = require('multer');
const upload = multer();
const router = express.Router();


router.get("/", function (request, response) {
  response.sendFile(path.join('/app/views/index.html'));
});

router.post('/file',(req, res) =>{
    upload.single('myfile')(req,res,err =>{
    if(err) throw err;          
    else if(req.file){          
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({size:req.file.size},null,3));
      }
      else res.send('YOU DIDNT INSERT ANY FILE. PLEASE GO BACK AND TRY AGAIN')
      res.end();
    })
});

module.exports = router;
