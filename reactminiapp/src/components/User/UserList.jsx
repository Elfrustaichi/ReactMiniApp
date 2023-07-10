import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import Loader from '../Loader'

const UserList = () => {

    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')
        .then(response=>response.json())
        .then(data=>setUsers(data.results))
        .catch(error=>console.log(error))

    },[])

 
  return (
    <div className='container'>
        <h1>Users</h1>
        <div className='row g-3'>
        {
            users ? users.map(user=>{
                return(
                    <UserCard userData={user} />
                )
            }) : <Loader />
        }
        </div>
        
    </div>
  )
}

export default UserList