import { Server, Socket } from 'socket.io';

export function registerSocketHandlers(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log('socket connected', socket.id);

    socket.on('join-room', (room: string) => {
      socket.join(room);
      socket.to(room).emit('system', `${socket.id} joined ${room}`);
    });

    socket.on('message', (payload) => {
      const { room } = payload || {};
      if (room) io.to(room).emit('message', payload);
    });

    socket.on('disconnect', () => {
      console.log('socket disconnected', socket.id);
    });
  });
}
