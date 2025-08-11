const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(express.json());


const mongoURL = 'mongodb://127.0.0.1:27017/testing';

mongoose.connect(mongoURL);
app.use(cors());

const userRoutes = require('./Router/user');

app.use('/regex', userRoutes);


// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     phone:{
//         type:Number,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// });

// const user = mongoose.model('user',userSchema);


// app.post('/create', async (req,res) => {
// //    console.log(req.body);
//         const data = req.body;
//         const abc = new user(data);
//         await abc.save();
//         console.log(abc);
//         return res.status(202).send(abc);
// });


// app.get('/take', async (req,res) => {
//     const data = await user.find();
//     return res.status(202).send(data);
// })



// app.get('/single/:email', async (req,res) => {
//     // console.log(req.params)
//     const {email} = req.params;    // single url ke liye use kiya jaata hain or ya to ise destructure krna padta hain ya fr params ke last main id likhna padta hain 

//     console.log(email)

//     //OR
//     // const id = req.params.id;

//     const data = await user.findOne({email});       // single id ke liye use hota hain findById
//     return res.status(202).send(data);
// })



// app.get('/create', async(req,res) => {
//     console.log('ab nahi aayega')
//     console.log(`>>>>>>>>>>>>>>>>>>>req.query>>>>>>>>>>`,req.query )
//     const {id} = req.query;
//     const data = await user.findById(id);
//     return res.status(202).send(data);
// })



// app.put('/updateRecord', async (req,res) => {
//     console.log(`>>>>>>>>>>>>>>req.body>>>>>>>>>>>>`, req.body)

//     const id = req.body.id;
//     const data = req.body;
//     const result = await user.findByIdAndUpdate(id,data,{new: true});
//     console.log(`>>>>>>>>>>>>result>>>>>>>>>>`, result)
//     return res.status(202).send({message: "record update succesfully"}, result);
// })


// app.post('/calc', async (req,res) => {
//     const {a,b,c} = req.body;
//     if(c === '+'){
//         const result = a + b;
//         return res.status(202).send(result);
//     }
//       else if(c === '-'){
//         const result = a - b;
//         return res.status(202).send(result);
//     }
//       else if(c === '*'){
//         const result = a * b;
//         return res.status(202).send(result);
//     }
//      else if(c === '/'){
//         const result = a / b;
//         return res.status(202).send(result);
//     }
// })


// app.post('/otp', async (req,res) => {
//     const {length} = req.body;
//     console.log(length);

//     let otp = '';
//     const digit = "0123456789"

//     for(let i=0;i<length;i++){
//         otp += Math.floor(Math.random() * 10)
//     }
//     return res.status(202).send(otp)
// })


app.post('/create', async (req,res) => {
  
})


app.listen(port, () => {
    console.log(`Server is running ${port}`);
})



