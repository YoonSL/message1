const socket = io();

const render = function(data){
    const incomeMsg = data.message;
    if(name){
    
    // $.ajax({url:'/api/'})
    $('#messages').append(
        $('<p>').text(data.user1 + ": " + incomeMsg),
        $('<br>')
    )
    console.log(data);
}
}
const sendMessage = function(event){
    event.preventDefault();
    const message = $('#msg-area').val();
    console.log(message);
    //$.post('new-message',{message: message});
    // socket.emit = saying send to server
    socket.emit('new-message', {message: message,user1: name, user2: name2});
    const newMsg ={
        user1ID: name,
        user2ID: name2,
        Message: message
    }
    $.ajax({url:`/api/message/:${name}`, method:'POST', data: newMsg})
    .then(function(){
        console.log(name);
    $('#msg-area').val('');
    })
   
}

socket.on('emit-message', function(data){
    render(data);
})
$('#send-msg').on('click',sendMessage);

/*----------------------------Register Name -------------------------*/
    var name;
    var name2;

const sendName = function (event){
    event.preventDefault();
    name = $('#idBox').val();
    socket.emit('new-name',{name: name});
    const newUser = {
        User:name
    }
    $.ajax({url:'/api/id', method:'POST', data: newUser})
    .then(function(name){
        console.log(name);
    })
}

socket.on('emit-users', function(){
    if(name){
        const $select = $('<select>');
        $select.append('<option>Select User</option>');
        // console.log(data);
        $.ajax({url:'/api/id' , method:'get'})
        .then(function(users){
            users.forEach(elem => $select.append(`<option>${elem.User}</option>`));
            $('#select-container').empty();
            $('#select-container').append($select);
        })
        
    }

})
$('#send-name').on('click',sendName);

/*------------------------------Start Chat------------------------*/

const startChat = function(event){
    event.preventDefault();
    $('#msg-area').empty();
    //empty chat area
    name2 = $('select').find(':selected').text();
}

$('#select-container').on('change','select',startChat);