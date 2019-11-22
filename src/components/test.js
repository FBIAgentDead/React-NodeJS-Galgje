import { delay } from "q";
import io from "socket.io-client";

var socket = io("http://localhost:3001");

console.log('oof1')
delay(4000);
console.log('oof2')
socket.emit('join room');
socket.emit('set word', "hallo");