
import { FormGroup, FormControl , InputLabel,Input , styled, Button, Typography} from '@mui/material';
import { useState , useEffect} from 'react';
import {editUser} from '../APIcalling/api';
import {useNavigate, useParams} from 'react-router-dom';

import { getUser } from '../APIcalling/api';





const Controller=styled( FormGroup)`
width:50%;
margin: 6% auto 0 auto;
& > div {
margin-top:24px}
`

const intialvalue={
    name:'',
    username:'',
    email:'',
    phone:''
}


const Edituser = ()=>{
    const [user, setuser]=useState(intialvalue)
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(()=>{
          loadUserDetails();
    }, [])
const loadUserDetails = async()=>{
    const response = await getUser(id); 
    setuser(response.data);
}

const valuechange =(e)=>{
    console.log( e.target.name,e.target.value)
   setuser({...user, [e.target.name]:e.target.value})
   console.log(user);
 
}

 const AdduserDetails = async()=>{
   await editUser(user, id);
   navigate('/allusers');
 }

    return(
   <Controller>
       <Typography variant='h4'><div className='text-white'>Edit user</div></Typography>
    <FormControl>
<InputLabel>Name</InputLabel>
<Input onChange={(e)=>valuechange(e)} name='name' value={user.name}/>
    </FormControl>

    <FormControl>
<InputLabel>Username</InputLabel>
<Input onChange={(e)=>valuechange(e)} name='username' value={user.username}/>
    </FormControl>

    <FormControl>
<InputLabel>Email</InputLabel>
<Input onChange={(e)=>valuechange(e)}  name='email' value={user.email}/>
    </FormControl>

    <FormControl>
<InputLabel>Phone</InputLabel>
<Input onChange={(e)=>valuechange(e)} name='phone' value={user.phone}/>
    </FormControl>
    <FormControl>
    <Button onClick={()=>AdduserDetails()} variant="contained">Edit-User</Button>
    </FormControl>

   </Controller>
        
    )
}


export default Edituser;