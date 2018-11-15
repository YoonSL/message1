const user = {}

module.exports = function(io){
    io.on('connection',function(socket){
        //SOCKET ROUTES
        socket.on('new-message', function(data){
            // console.log(data);
            io.emit('emit-message', data);
        })

        socket.on('new-name', function(data){
            // console.log(data);
            user[data.name] = socket;
            io.emit('emit-users', Object.keys(user));
        })

        socket.on('new-change',function(newData){
            // console.log(newData);
            const socket1 = user[newData.user1];
            const socket2 = user[newData.user2];

            socket1.emit('emit-message',newData);
            socket2.emit('emit-message',newData);
        })
        console.log('connected');
    })
}