class RestfulAPI {
    constructor(resourceName,app,model){
        this.resource = resourceName;
        this.app = app;
        this.model = model;
    }

    findId(){
        this.app.get(`/api/${this.resource}`,(req,res)=>{
            this.model.find({})
            .then(function(data){
                res.json(data);
            }).catch(function(err){
                res.json(err);
            })
        })
    }

    createId(){
        console.log(`/api/${this.resource}`)
        this.app.post(`/api/${this.resource}`,(req,res)=>{
            
            this.model.create(req.body)
            .then(function(data){
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    }
    
    findmsg(msgId){
        this.app.get(`/api/${this.resource}/:${msgId}`),(req,res)=>{
            this.model.find({
                where: {
                    [msgId]: req.params[msgId]
                }
                })
                .then(function(data){
                    res.json(data);
                })
                .catch(function(err){
                    res.json(err);
                })
        } 
    }
    createmsg(msgId){
        this.app.post(`/api/${this.resource}/:${msgId}`),(req,res)=>{
            console.log(req.body)
            this.model.create(req.body)
            .then(function(data){
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        }
    }
}

module.exports = RestfulAPI;

// i would need save user1data , user2data message between users
// would need get for message
// would need push for user account
// would need push for user message
// would need get for users

// data 

// user1 = hi
// user2 = bye
// message between two users{
//     save user id for each message display 
//     all message data with that id

