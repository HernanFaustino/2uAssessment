import socketIo from 'socket.io';
const io = new socketIo();

const Socket = {
  emit: function (event, data) {
    console.log(event, data);
    io.sockets.emit(event, data);
  }
};

io.on("connection", function (socket) {
  console.log("A user connected");
});

exports.Socket = Socket;
exports.io = io;