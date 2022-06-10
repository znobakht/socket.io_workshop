module.exports = async function(io){
    io.on('connection', (socket) => {
        console.log('a new user connected');
        socket.emit("welcomeMessage", "welcome");
        socket.broadcast.emit("welcomeMessage", "a new user connected to server");
        
        socket.on("message", (msg) => {
          io.emit("message", msg);
        });
    })
}

