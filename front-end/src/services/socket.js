import { io } from 'socket.io-client';

const socket = io('ws://medtools.herokuapp.com/');

export default socket;