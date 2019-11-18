// global.gSocket.on('connection', socket => {
//     console.log('Socket connectado: ' + socket.id)

//     socket.emit('previousMessages', messages)

//     socket.on('sendMessage', data => {
//         messages.push(data)
//         socket.broadcast.emit('receivedMessage', data)
//     })

//     socket.on('disconnect', function(data) {
//         console.log('user disconnected:' + socket.id);
//       });

//     socket.on('deleteMessages', data => {
//         messages = []
//         socket.broadcast.emit('messagesDeleted', messages)
//     })
// })