import React from 'react'
import UserItem from './UserItem'
import './UserItem.css ' 


export default function UsersList(props) {
    if(props.item.length === 0){ 
    return (
    <div className='center'>
        <h2>NO user found</h2>
    </div>
  )
}
  return  ( <ul>
    {props.item.map(user =>{
        return < UserItem/>

    })}

  </ul>
  )

}
