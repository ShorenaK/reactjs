import React from 'react'
import UsersList from '../components/UsersList'

export default function Users() {
  const USERS = [{id: 'u1', name: 'Shorena',
  image: 
  '',
  places: 3}]
  return (
    <UsersList items={USERS}/>
  )
}

//images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260