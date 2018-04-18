const request = require('request');
const apiURL = require('./apiURLs');

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
                console.log("error");
            } else if (response.statusCode !== 200){
                res.render('error', {message: 'Error accessing API: ' +
                    response.statusMessage +
                    " ("+ response.statusCode + ")" });
                console.log("Erro accessing api");
            } else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
                console.log("Unexpected data");
            } else if (!body.length){
                res.render('error', {message: 'No documents in collection'});
                console.log("body length");
            } else {
                res.render('menu', {menus: body});
                console.log("render " + body);
            }
        }
    );
};
module.exports = {
    menulist
};
