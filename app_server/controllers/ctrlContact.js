
const contactlist = function(req, res){
    res.render('contact',{
        contacts:
            [
                {note:'Location', detail:'Pohjois Haaga, Helsinki'},
                {note:'Phone number', detail:'+358412345678'},
                {note:'Email', detail:'helsinki@gmail.com'}
            ]});
};
module.exports = {
    contactlist
};