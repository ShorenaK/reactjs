
import './App.css';
import React from 'react'
import GoalList from './components/GoalList';
function App() {
  const courseGoals = [
    {id: 'cg1', text: 'finish'},
    {id: 'cg2', text: 'Learn all about the course' },
    {id: 'cg3', text: 'Help other student'}
  ];
  return (
    <div className="course-goals">
      <h1> Hi, this is Reactjs!</h1>
      <GoalList goals={courseGoals}/>
    </div>
  );
  }
  
export default App; 


