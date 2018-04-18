const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlMenu = require('../controllers/ctrlMenu'); // ... for the list of World Cup winners (countries)
const ctrlContact = require('../controllers/ctrlContact'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/menu', ctrlMenu.menulist);  // List of World Cup winners (countries)
router.get('/contact', ctrlContact.contactlist);  // List of Golden ball winners (players)

module.exports = router;
