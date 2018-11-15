const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    User:{
        type:String,
        unique:true
    }
})

var User = mongoose.model('User',UserSchema);

module.exports = User;