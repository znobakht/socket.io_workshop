module.exports = async function(io){
    io.on('connection', (socket) => {
        console.log('a new user connected');
        socket.emit('message', 'welcome');
        socket.on("message", (msg) => {
          io.emit("message", msg);
        });
    })
}

