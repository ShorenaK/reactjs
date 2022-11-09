import React from 'react'
import UsersList from '../components/UsersList'

export default function Users() {
  const USERS = [{id: 'u1', name: 'Shorena', image: '' , place: 3}]
  return (
    <UsersList items={USERS}/>
  )
}
