"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _chat = require('./../model/chat');
var _updateConsultStatus = require('./../services/updateConsultStatus');


 const socketChat = (io ) => {
 io.on('connection', (socket) => {
  // socket.on('hi', () => console.log('hhola'));

  socket.on("join_room", (room) => {
    socket.join(room);
  });

  socket.on('join', data => {
    // console.log(data)
    io.to(data.room).emit('response', {user: data.user});
  });

  socket.on('message', async (data) => {
    if(data.message) {
      await _chat.updateChatHistory.call(void 0, data);
    }
    io.to(data.room).emit('message', data);
  });

  socket.on('consult_status', (data) => {
    const updateStatus = new (0, _updateConsultStatus.UpdateConsultStatus)(data);
    updateStatus.execute();

    io.emit('consult_status');

  });
});
}; exports.socketChat = socketChat 