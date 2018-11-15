const RestfulAPI = require('./RestClass');
const models = require('../data');

module.exports = function (app) {

    const id = new RestfulAPI('id',app,models.User);
    id.findId();
    id.createId();

    const msg = new RestfulAPI('message',app,models.Messanger);
   
    msg.findmsg('id');
    msg.createmsg();
}



// i would need user1data , user2data message between users
// would need get for message
// would need push for user account
// would need push for user message
// would need get for users


//app.post ...
//message.create({sender:user1 , message: message})
//.then(data => data._id) $And 
//push to messages array $set data._id