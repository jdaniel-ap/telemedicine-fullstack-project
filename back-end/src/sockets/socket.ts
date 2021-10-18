import { updateChatHistory } from './../model/chat';
import { UpdateConsultStatus } from './../services/updateConsultStatus';
import socketIO from 'socket.io';

export const socketChat = (io : socketIO.Server) => {
 io.on('connection', (socket: socketIO.Socket) => {

  socket.on("join_room", (room) => {
    socket.join(room);
  });

  socket.on('join', data => {
    io.to(data.room).emit('response', {user: data.user});
  });

  socket.on('message', async (data) => {
    if(data.message) {
      await updateChatHistory(data);
    }
    io.to(data.room).emit('message', data);
  });

  socket.on('consult_status', (data) => {
    const updateStatus = new UpdateConsultStatus(data);
    updateStatus.execute();

    io.emit('consult_status');

  });
});
} 