

import axios from 'axios';

const URL = 'http://localhost:8080';

 export const adduser= async(data)=>{
    try{
       await axios.post(`${URL}/add`, data)

    }catch(error){
        console.log('api calling is not connecting correct ',error)

    }
}


 export  const getuser = async()=>{
    try{
     return  await axios.get(`${URL}/all`)

    }catch(error){
        console.log('error while calling getusers')
     
    }
}

// edituser api 
export const getUser =async(id)=>{
    try{
  return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log('error while calling getUser',error)

    }
}

export const editUser = async(user, id)=>{
    try{
        return await 
        axios.post(`${URL}/${id}`,user);

    }catch(error){
        console.log('error  while calling editUser api',error)

    }
}


// deleteUser api call

export const deleteUser= async(id)=>{
   try{
    return await axios.delete(`${URL}/${id}`);

   }catch(error){
    console.log("error while calling deleteUser api",error);
   }
}



// export default {adduser, getuser};