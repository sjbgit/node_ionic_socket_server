var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


/*
app.configure(function () {
    router.use(express.static(path.resolve(__dirname, 'client')));
    //router.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
    router.use(express.logger('dev')); 						// log every request to the console
    router.use(express.bodyParser()); 							// pull information from html in POST
    router.use(express.methodOverride()); 						// simulate DELETE and PUT
});
*/

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


io.on('connection', function(socket){
    socket.on('event:new:image',function(data){
        socket.broadcast.emit('event:incoming:image',data);
    });
});

server.listen(8000,function(){
    console.log('Socket.io Running');
});/**
 * Created by sbunke on 4/9/2015.
 */
