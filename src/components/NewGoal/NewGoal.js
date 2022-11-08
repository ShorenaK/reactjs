import React, {useState} from 'react'
import './NewGoal.css'

export default function NewGoal(props) {
  const [enteredText, setenteredText] = useState('')
  
     const addGoalHandleer = (event) =>{
      event.preventDefault()
      
      const newGoal = {
        id: Math.random().toString(),
        text: enteredText
     }
     console.log(newGoal)

     setenteredText('');

     props.onAddGoal(newGoal)
    }

    const textChangeHandler = event => {
      setenteredText(event.target.value);
    }

  return (
    <form className='new-goal' onSubmit={addGoalHandleer}>
        <input type="text"value={enteredText}  onChange={textChangeHandler}/>
        <button type='submit'> Add Goal</button>
    </form>
  )
}
