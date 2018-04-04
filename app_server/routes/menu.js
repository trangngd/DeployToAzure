var express = require('express');
var router = express.Router();

var ctrlMenu = require('../controllers/ctrlMenu');

/* GET home page. */
router.get('/', ctrlMenu.menulist);

module.exports = router;