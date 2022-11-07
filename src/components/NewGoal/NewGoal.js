import React from 'react'
import './NewGoal.css'
export default function NewGoal() {
    const addGoalHandleer = (event) =>{
      event.preventDefault()
      const newGoal = {
        id: Math.random().toString(),
        text: 'My new goal!'
     }
     console.log(newGoal)
    }
  return (
    <form className='new-goal' onSubmit={addGoalHandleer}>
        <input type="text" />
        <button type='submit'> Add Goal</button>
    </form>
  )
}
