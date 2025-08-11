const user = require('../Model/user');

exports.userCreate = async(req,res)=>{
    const data = req.body;
    const abc = new user(data);
    await abc.save();
    return res.status(202).send(abc)
}



















