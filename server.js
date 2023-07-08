const express = require("express");
const mongoose=require('mongoose');

const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app=express();
app.use(express.json());
app.use(cors());

server = require('http').createServer(app);

mongoose.connect('mongodb+srv://borismirevbm:2YacEBc3qgz4OiLJ@blocks.6ud9dig.mongodb.net/blocks?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connected to DB'))
  .catch(console.error);

const Block=require('./models/Block');

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
  'force new connection': true 
});
server.listen(3002);

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('disconnect', function () {
    console.log(`User DisConnected: ${socket.id}`);
});

  
  const BlockEventEmitter = Reply.watch();
  replyEventEmitter.on('change', change => {
    let text='block';
      socket.emit('message',{text});
  });
  
});


app.get('/blocks/all', async(req,res)=>{  

    const blocks=await Block.find();
    res.json(blocks);
});

app.get('/block/:id', async(req,res)=>{  

  const block=await Block.find(req.params.hash);
  
   res.json(block);
});

app.post('/block/new', async (req,res)=>{

    const block=new Block({
        timestamp:req.body.timestamp,
        data:req.body.data,
        hash:req.body.hash,
        prevHash:req.body.prevHash,
    });
    block.save();
    res.json(block);
});

