import { io } from 'socket.io-client';

const socket = io('https://medtools.herokuapp.com/');

export default socket;