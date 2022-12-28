import mongoose from 'mongoose';



const  Connection = async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.s1okn7o.mongodb.net/?retryWrites=true&w=majority`;
try{
   await mongoose.connect(URL, {useUnifiedtopology:true, useNewUrlParser:true});
   console.log('database is connecting')

}catch(error){
    console.log("datbase is not connecting",error)
}   

} 

export default Connection;
