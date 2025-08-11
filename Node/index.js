const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8082;


app.use(express.json());
const mongoURL = 'mongodb://127.0.0.1:27017/random';
mongoose.connect(mongoURL);
app.use(cors());

const userRoutes = require('./Router/user');
app.use('/regex',userRoutes)

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },

//     phone: {
//         type: Number,
//         require: true
//     },

//     email: {
//         type: String,
//         require: true
//     },

//     password: {
//         type: String,
//         require: true
//     }
// })


// const user = mongoose.model('userSchema',userSchema);

app.post('/create',async(req,res)=>{
    // console.log(`>>>>>>>req.body>>>>>>>>>>`,req.body);
    // const data = req.body;
    // const abc = new user(data);
    // await abc.save();
    // return res.status(202).send(abc);
})


// app.get('/random',async(req,res)=>{
//     const data = await user.find();
//     return res.status(202).send(data);
// })


// app.get('/single/:email',async(req,res)=>{
//     const {email} = req.params;
//     const data = await user.findOne({email});
//     return res.status(202).send(data);
// })



app.get('/single',async(req,res)=>{
    console.log(`>>>>>>>req.query>>>>>>>>>>`,req.query);
    const {id} = req.query;
    const data = await user.findById(id);
    return res.status(202).send(data);
})



app.delete('/remove',async(req,res)=>{
    console.log(`>>>>>>>req.query>>>>>>>>>>`,req.query);
    const {id} = req.query;
    const data = await user.findByIdAndDelete(id);
    return res.status(202).send(data);
})


app.put('/updateRecord',async(req,res)=>{
    console.log(`>>>>>>>req.query>>>>>>>>>>`,req.query);
    const id = req.body.id;
    const data = req.body;
    const result = await user.findByIdAndUpdate(id,data);
    console.log(`>>>>>>>>>>result>>>>>>>`,result);
    return res.status(202).send({message: "record update successfully"},result);
})


app.post('/calculate',async(req,res) => {
    const {a,b,operater} = req.body;
    if(operater == "+"){
        const result = a + b;
        return res.status(202).send(result);
    }
    else if(operater == "-"){
        const result = a - b;
        return res.status(202).send(result);
    }
    else if(operater == "*"){
        const result = a * b;
        return res.status(202).send(result);
    }
    else if(operater == "/"){
        const result = a / b;
        return res.status(202).send(result);
    }
})


app.post('/otp',async(req,res) => {
    const {length} = req.body;
    console.log(`>>>>>>length>>>>>>`,length);
    let otp = "";
    
    for(let i=0;i<length;i++){
        otp += Math.floor(Math.random()*10);
    }
    return res.status(202).send(otp)
})


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})