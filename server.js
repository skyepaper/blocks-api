const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://borismirevbm:2YacEBc3qgz4OiLJ@aquarium.6ud9dig.mongodb.net/messages?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connected to DB'))
  .catch(console.error);

const Message=require('./models/Message');
const Reply=require('./models/Reply');
app.get('/messages', async(req,res)=>{  

    const messages=await Message.find();
    res.json(messages);
});

app.post('/message/new', async (req,res)=>{

    const message=new Message({

        text:req.body.text
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
        messageId:req.body.messageId
    });
    reply.save();
    res.json(reply);
});

app.listen(3001, ()=>console.log('Server started on port 3001'));