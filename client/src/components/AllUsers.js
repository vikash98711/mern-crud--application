import {Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';
import { useEffect, useState } from 'react';
import {getuser, deleteUser} from '../APIcalling/api';

import {Link} from 'react-router-dom';



const Container=styled(Table)`
width:100%;
margin: 50px auto 0 auto;
`
const Thead=styled(TableRow)`
background-color:Teal;
& > th{
    color:#ffff;
    font-size:24px
}

`
const Tbody =styled(TableRow)`
& > td{
    font-size:24px;
    color:#ffffff
}
`

const AllUsers =()=>{
    const [users, setUsers] = useState([])

useEffect(()=>{
    getAllusers();
},[])

const getAllusers =async()=>{
   let response =  await getuser();
   setUsers(response.data);
}



const deleteUserDetails = async(id)=>{
    await deleteUser(id);
    getAllusers();
}

    return(
      <Container className='New-container'>
        <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              <TableCell></TableCell>

            </Thead>
        </TableHead>
        <TableBody>
            {
                users.map(user =>(
                    <Tbody key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                        <Button variant='contained' style={{marginRight: 10, width:91 , marginTop:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' style={{marginTop: 10}}  color="secondary" onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                </TableCell>
                    </Tbody>
                ))
            }
        </TableBody>
      </Container>
    )
}


export default AllUsers;