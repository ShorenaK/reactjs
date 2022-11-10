import React from 'react'
import UsersList from '../components/UsersList'

export default function Users() {
  const USERS = [{id: 'u1', name: 'Shorena',
   image: 'https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/test.png',
    places: 3}]
  return (
    <UsersList items={USERS}/>
  )
}
