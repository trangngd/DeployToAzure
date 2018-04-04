const mongoose = require('mongoose');

// Get access to the 'goldenBallWinner' model so we can interact with the GoldenBallWinners collection
const contactModel = mongoose.model('contact');

const contactList = function (req, res) {
    contactModel.find({}, function(err, contacts){
        if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(contacts);
        }
    });};

const addContact = function (req, res) {
    res
        .status(201)
        .json({"Add contact" : "Work in progress"});
};

module.exports = {
    contactList,
    addContact
};