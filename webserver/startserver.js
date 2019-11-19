var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
//   what to do if server is visited online
});

io.on('connection', function(socket){

  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('send letter', (letter) =>{
    console.log(letter);
  });

  socket.on('join room', (room) =>{
    console.log("user joined: " + room);
    socket.join(room);
    io.to("test").emit("oof");
  });

  socket.on('message', (message) =>{
    socket.to(room).emit("message",{message});
  });

});

http.listen(3001, function(){
  console.log('listening on *:3001');
});