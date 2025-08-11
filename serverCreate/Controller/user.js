const user = require("../model/user");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    console.log(`>>>>>>>>>req.body>>>>>`, req.body);
    const {name,email,phone,password} = req.body;

    if(!(name && email && phone && password)){
                return res.status(404).send({message: "all input field are required"})  
    }

    const alreadyEmail = await user.findOne({email});
    const alreadyphone = await user.findOne({phone});
    console.log(">>>>>>>>>>>alreadyEmail>>>>>>>>>>",alreadyEmail);
    if(alreadyEmail && alreadyphone){
        return res.status(404).send({message: "user already exist"})
    }

    const salt = bcrypt.genSaltSync(10);
    console.log(`>>>>>>>>>>>>salt>>>>>>>>>>>`,salt);
    const hash = bcrypt.hashSync(password, salt)
    console.log(`>>>>>>>>>>>>hash>>>>>>>>>`,hash)
    
    const data = {
        name,
        email,
        phone,
        password: hash
    }
    console.log(`>>>>>>>>>>>>>data>>>>>>>>>>>`,data)

    // const data = req.body;
    const abc = new user(data);
    await abc.save();
    return res.status(202).send(abc);
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
};


exports.login = async (req,res) => {
    const {email, password} = req.body;
    const alreadyEmail = await user.findOne({email});
    if(!alreadyEmail){
        return res.status(404).send({message: "please signup please"})
    }

    const dbPassword = alreadyEmail.password;

    const match = await bcrypt.compare(password,dbPassword);


    const token = jwt.sign({email},'fgcfdsbfhjrnfiuvjkernfkejrmfner ')
    console.log(`>>>>>>>>>>>>>>token>>>>>>>>>>>>`,token);

    if(!match){
        return res.status(404).send({message: "incorrect password"})
    }else{
        return res.status(404).send({message: "user login successfully",token})
    }
}

exports.getUserById = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await user.findById(id)
        console.log(`>>>>>>>>>data>>>>>>>>data`,data)
        return res.status(202).send(data)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await user.findByIdAndDelete(id);
        return res.status(202).send(data)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


exports.updateUser = async(req,res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await user.findByIdAndUpdate(id,data,{new:true});
        return res.status(202).send({message: "record update successfully",result});
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


exports.reset = async (req,res) => {
   console.log(`>>>>>>>>>>req.body>>>>>>`,req.body)

   const {email,oldPassword,newPassword} = req.body;
     const alreadyEmail = await user.findOne({email});
    if(!alreadyEmail){
        return res.status(404).send({message: "invalid User"});
    }

    const dbPassword = alreadyEmail.password;
    const id = alreadyEmail._id;

    
    const match = await bcrypt.compare(oldPassword,dbPassword);

    if(!match){
        return res.status(404).send({message: "password not match"})
    }else{
  const salt = bcrypt.genSaltSync(10);
    // console.log(`>>>>>>>>>>>>salt>>>>>>>>>>>`,salt);
    const hash = bcrypt.hashSync(newPassword, salt)
    // console.log(`>>>>>>>>>>>>hash>>>>>>>>>`,hash)
    
    const data = {
        password: hash
         } 

         const result = await user.findByIdAndUpdate(id,data,{new:true})
         return res.status(202).send({message:"password update succesfully",result})
   }    
}






