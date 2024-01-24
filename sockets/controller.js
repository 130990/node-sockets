const socketController = (socket) => {
    console.log('Client connected!!', socket.id);

    socket.on('disconnect', ()=>{
        console.log('Client disconnected!!', socket.id);
    });

    socket.on('submit-message', (payload, callback)=>{
        const uid =12234;
        callback(uid);

        socket.broadcast.emit('submit-message', payload);
    })
}

module.exports = {
    socketController
}