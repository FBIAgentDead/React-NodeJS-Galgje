var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
//   what to do if server is visited online
});

let currentWord = "";
let letters = [];

io.on('connection', function(socket){
  console.log('a user connected');


  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('send letter', (letter) =>{
    console.log(letter);
    if(currentWord.includes(letter)){
      socket.broadcast.emit("correct letter", letter);
    } else {
      socket.broadcast.emit("wrong letter", letter);
    }
  });

  socket.on('send word', (word) =>{
    console.log(word);
    if(currentWord === word){
      socket.broadcast.emit("correct word", word);
    } else {
      socket.broadcast.emit("wrong word", word);
    }
  });

  socket.on('join room', (room) =>{
    socket.join(room);
    io.to("test").emit("oof");
  });

  socket.on('message', (message) =>{
    socket.to(room).emit("message",{message});
  });

  socket.on('set word', (word) =>{
    socket.broadcast.emit("onWordChosen", word);
    currentWord = word;
  });

});

http.listen(3001, function(){
  console.log('listening on *:3001');
});

// class Room {
//   constructor(id, currentPlayers) {
//       this.id = id;
//       this.currentPlayers = currentPlayers;
//       //this.currentWord = currentWord;
//   }
// }

// class Player {
//   constructor(currentRoom, playerId) {
//       this.currentRoom = currentRoom;
//       this.playerId = playerId;
//   }
// }
