const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    address: String, // String is shorthand for {type: String}
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
