const User = require('../models/users')

const signup = async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    if (name==undefined||name.length===0||password==undefined||password.length===0||email==undefined||email.length===0){
        return res.status(400).json({err:"bad parameters"})
    }
    await User.create({name,email,password}).then(()=>{
        res.status(201).json({message:'Successfully created new user'})
    })
    }catch(err){
        res.status(500).json(err)
    }
}