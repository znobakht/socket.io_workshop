const socket = io();
const form = document.getElementById('form');
const username = document.getElementById('username');
const room = document.getElementById('room');

form.addEventListener('submit', (msg)=>{
    msg.preventDefault();
    if(username.value && room.value){
        // console.log({
        //   username: username.value,
        //   room: room.value,
        // });
        socket.emit('joinRequest', {
            username: username.value,
            room: room.value
        });
        username.value = '';
        room.value = '';
    }
})

socket.on('message', (msg)=>{
    console.log(msg);
})

socket.on('welcomeMessage', (msg)=>{
    console.log(msg);
})

socket.on('joinRequest',(msg)=>{
    console.log(msg);
})