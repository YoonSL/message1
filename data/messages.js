const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MsgSchema = new Schema({
    Message:{
        type:String
    },

    user1ID:{
        type:String
    },

    user2ID:{
        type:String
    }
})

var Msg = mongoose.model('Msg',MsgSchema);

module.exports = Msg;

