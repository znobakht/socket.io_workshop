const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (msg)=>{
    msg.preventDefault();
    if(input.value){
        socket.emit('message', input.value);
        input.value = '';
    }
})

socket.on('message', (msg)=>{
    console.log(msg);
})
