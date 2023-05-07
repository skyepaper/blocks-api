const express = require("express");
const mongoose=require('mongoose');
const EventEmitter = require('events');

const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app=express();
app.use(express.json());
app.use(cors());

server = require('http').createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
server.listen(3002);

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  myEmitter.addEventListener('eventOne',()=>{
    let text=message;
    socket.emit('message',{text});
  });
  io.on('close', () => myEmitter.removeEventListener('eventOne'));
});


mongoose.connect('mongodb+srv://borismirevbm:2YacEBc3qgz4OiLJ@aquarium.6ud9dig.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connected to DB'))
  .catch(console.error);

const Message=require('./models/Message');
const Reply=require('./models/Reply');
const User=require('./models/User');

let message='';
const myEmitter=new EventEmitter();
//myEmitter.on('eventOne', trigger);


const messageEventEmitter = Message.watch();
messageEventEmitter.on('change', change => {
  message='message';
  myEmitter.emit('eventOne');
});
const replyEventEmitter = Reply.watch();
replyEventEmitter.on('change', change => {
  message='reply';
  myEmitter.emit('eventOne');
});
const userEventEmitter = User.watch();
userEventEmitter.on('change', change => {
  message='user';
  myEmitter.emit('eventOne');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/messages', async(req,res)=>{  

    const messages=await Message.find();
    res.json(messages);
});

app.post('/message/new', async (req,res)=>{

    const message=new Message({

        text:req.body.text,
        senderId:req.body.senderId
    });
    message.save();
    res.json(message);
});

app.get('/replies', async(req,res)=>{

    const replys=await Reply.find();
    res.json(replys);
});

app.post('/reply/new', async (req,res)=>{

    const reply=new Reply({

        text:req.body.text,
        senderId:req.body.senderId,
        messageId:req.body.messageId
    });
    reply.save();
    res.json(reply);
});

app.get('/users', async(req,res)=>{

    const users=await User.find();
    res.json(users);
});

app.post('/user/new', async (req,res)=>{

    const user=new User({

        email:req.body.email,
        name:req.body.name,
        image:req.body.image,
    });
    user.save();
    res.json(user);
});

app.put('/user/save/:id', async (req,res)=>{

    const user=await User.findByIdAndUpdate(req.params.id);
   if(user) {
    user.name= req.body.name;
    user.image= req.body.image;
   }
   
    user.save();
    res.json(user);
});






