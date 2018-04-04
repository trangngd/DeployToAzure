const express = require('express');
const router = express.Router();

const ctrlApiMenu = require('../controllers/ctrlApiMenu');
const ctrlApiContact = require('../controllers/ctrlApiContact');


router
    .route('/menu')
    .get(ctrlApiMenu.menuList)
    .post(ctrlApiMenu.addMenu);

router
    .route('/contact')
    .get(ctrlApiContact.contactList)
    .post(ctrlApiContact.addContact);

module.exports = router;
