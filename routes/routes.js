const express = require('express');

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const path = require('path');


router.get("/", function (request, response) {
  response.sendFile(path.join('app/views/index.html'));
});

module.exports = router;