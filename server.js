const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://borismirevbm:2YacEBc3qgz4OiLJ@aquarium.6ud9dig.mongodb.net/aquarium?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connected to DB'))
  .catch(console.error);

const Message=require('./models/Message');
const Reply=require('./models/Reply');
const User=require('./models/User');
const Like=require('./models/Like');
const Postbox=require('./models/Postbox');

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

app.get('/postboxes', async(req,res)=>{  

    const postboxes=await Postbox.find();
    res.json(postboxes);
});

app.post('/postbox/new', async (req,res)=>{

    const postbox=new Postbox({

        userId:req.body.userId,
        senderId:req.body.senderId,
        status:req.body.status,
        gold:req.body.gold,

    });
    postbox.save();
    res.json(postbox);
});

app.get('/likes', async(req,res)=>{  

    const likes=await Like.find();
    res.json(likes);
});

app.post('/like/new', async (req,res)=>{

    const like=new Like({

        userId:req.body.userId,
        messageId:req.body.messageId,
       
    });
    like.save();
    res.json(like);
});


app.listen(3001, ()=>console.log('Server started on port 3001'));

