
import { response } from 'express';
import User from '../schema/user-schema.js';

 export const adduser= async(req, res)=>{
   const user = req.body
   
    const newUser = new User(user);
    console.log(newUser)
   

    try{
        await newUser.save();
         res.status(204).json(newUser);
    }catch(error){
      res.status(409).json({message: error.message})

    }
    }


      export const getusers =async(req,res)=>{
      try{
          const users = await User.find({});
           res.status(200).json(users);
      }catch(error){
        res.status(404).json({message:error.message})

      }
    }

    //  edit users api controller

    export const getUser = async (req, res)=>{
      // console.log(req.params.id);
      try{
        const user = await User.findById({_id: req.params.id});
         res.status(200).json(user);
    }catch(error){
      res.status(404).json({message:error.message})

    }
    }

    export const editUser = async(req, res )=>{
      let user = req.body;
      const editUser = new User(user)
   try{
  await User.updateOne({ _id: req.params.id}, editUser);
  res.status(201).json(editUser);

   }catch(error){
   res.status(409).json({message: error.message});
   }
    }

export const deleteUser = async(req, res)=>{
  try{
    await User.deleteOne({_id: req.params.id});
    res.status(209).json({message: 'user deleted sucessfully'})
  }catch(error){
res.status(409).json({message: error.message});
  }
}
    