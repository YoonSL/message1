const socket = io();

const sendMessage = function(event){
    event.preventDefault();
    const message = $('#message').val();
    console.log(message);
    //$.post('new-message',{message: message});
    // socket.emit = saying send to server
    socket.emit('new-message', {message: message});
    $('#message').val('');
}

socket.on('emit-message', function(data){
    const incomeMsg = data.message;
    $('#messages').append(
        $('<p>').text(incomeMsg),
        $('<br>')
    )
    
    
    console.log(incomeMsg);
})
$('#send-msg').on('click',sendMessage);