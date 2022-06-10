module.exports = async function(io){
    io.on('connection', (socket) => {

        console.log('a new user connected');
        socket.emit("welcomeMessage", "welcome");
        socket.broadcast.emit("welcomeMessage", "a new user connected to server");
        
        socket.on("message", (msg) => {
          io.emit("message", msg);
        });

        socket.on('joinRequest', ({username, room})=>{
          socket.join(room);
          socket.broadcast.to(room).emit('message', `${username} has joined ${room} room`);
        })

        socket.on('disconnect', ()=>{
          io.emit("message", 'a user disconnected');
        })
    })
}

