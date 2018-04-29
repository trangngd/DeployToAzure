const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlMenu = require('../controllers/ctrlMenu'); // ... for the list of menu
const ctrlContact = require('../controllers/ctrlContact'); // ... for the the list of contact

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/menu', ctrlMenu.menulist);  // List of food
router.get('/contact', ctrlContact.contactlist);  // List of contact

router
    .route('/menu/add')
    .get(ctrlMenu.showForm)   // Display the form
    .post(ctrlMenu.addData);

module.exports = router;
