module.exports = function(io){
    io.on('connection',function(socket){
        //SOCKET ROUTES
        socket.on('new-message', function(data){
            console.log(data);
            io.emit('emit-message', data);
        })

        console.log('connected');
    })
}