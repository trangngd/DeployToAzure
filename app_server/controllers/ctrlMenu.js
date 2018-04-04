/* GET home page */
var menulist = function(req, res){
    res.render('menu',{
        menus:
            [
                {food:'BRUSCHETTE SICILIANI', ingre:'Oven–baked ciabatta bread served with diced tomatoes', price:'12e'},
                {food:'GRILLED ASPARAGUS WITH PROSCIUTTO', ingre:'Wood-grilled asparagus wrapped in prosciutto', price:'15e'},
                {food:'MEATBALLS & RICOTTA', ingre:'Simmered in pomodoro sauce with ricotta and romano cheese', price:'14e'},
                {food:'THREE-CHEESE & SAUSAGE STUFFED MUSHROOMS', ingre:'Stuffed with sausage, spinach, ricotta, romano, mozzarella', price:'13e'}
            ]});
};
module.exports = {
   menulist
};