// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'worldCupWinner' model so we can interact with the WorldCupWinners collection
const menuModel = mongoose.model('menu');

const menuList = function (req, res) {

    menuModel.find({}, function(err, menus){
        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(menus);
        }
    });
};

const addMenu = function (req, res) {
    menuModel.create(req.body, function(err, newMenu){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newMenu);
            }
        }
    );
};

module.exports = {
    menuList,
    addMenu
};