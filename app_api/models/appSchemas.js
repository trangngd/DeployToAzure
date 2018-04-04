const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({food: String, ingre: String, price: String});
const contactSchema = new mongoose.Schema({note: String, detail: String});

mongoose.model('menu', menuSchema);
mongoose.model('contact', contactSchema);