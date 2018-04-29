const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req, res){
    res.render('menu_add');
};

const addData = function(req, res){
    const path = '/api/menu';

    const postdata = {
        food: req.body.food,
        ingre: req.body.ingre,
        price: req.body.price
    };

    const requestOptions = {
        url : apiURL.server + path,
        method : 'POST',
        json : postdata
    };

    request(
        requestOptions,
        function (err, response){
            if (response.statusCode === 201) {
                res.redirect('/menu');
            } else {
                res.render('error', {message: 'Error adding data: ' +
                    response.statusMessage +
                    ' ('+ response.statusCode + ')' });
            }
        }
    );
};

const menulist = function(req, res){
    const path = '/api/menu';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

    request(
        requestOptions,
        function (err, response, body){
            if (err){
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200){
                res.render('error', {message: 'Error accessing API: ' +
                    response.statusMessage +
                    " ("+ response.statusCode + ")" });
            } else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length){
                res.render('error', {message: 'No documents in collection'});
            } else {
                res.render('menu', {menus: body});
            }
        }
    )
};
module.exports = {
    menulist,
    showForm,
    addData
};
