import { UpdateConsultStatus } from './../services/updateConsultStatus';
import socketIO from 'socket.io';

export const socketChat = (io : socketIO.Server) => {
 io.on('connection', (socket: socketIO.Socket) => {
  // socket.on('hi', () => console.log('hhola'));

  socket.on("join_room", (room) => {
    socket.join(room);
  });

  socket.on('join', data => {
    // console.log(data)
    io.to(data.room).emit('response', {user: data.user});
  });

  socket.on('message', (data) => {
    io.to(data.room).emit('message', data);
  });

  socket.on('consult_status', (data) => {
    const updateStatus = new UpdateConsultStatus(data);
    updateStatus.execute();

    io.emit('consult_status');

  });
});
} 