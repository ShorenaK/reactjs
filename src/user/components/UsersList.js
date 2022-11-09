import React from 'react'
import UserItem from './UserItem'
import './UserList.css ' 


export default function UsersList(props) {
    if(props.item.length === 0){ 
    return (
    <div className='center'>
        <h2>NO user found</h2>
    </div>
  )
}
  return  ( <ul className='user-list'>
    {props.item.map(user =>{
        return < UserItem 
        key={user.id} 
        id={user.id} 
        image={user.image} 
        name={user.name}
        placeCount={user.places}/>

    })}

  </ul>
  )

}
