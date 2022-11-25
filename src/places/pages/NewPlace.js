import React, {useCallback, useReducer} from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './NewPlace.css';


const formReducer = (state, action)=>{
  switch(action.type){
    case 'INPUT_CHANGE':
      return{}
  default:
  return state;
  }
}
const NewPlace = () => {
  useReducer(formReducer, {
    input: {
      title: {
        value: '', 
        isValid: false
      }, 
      description: {
        value: '', 
        isValid: false
      }
    }, 
    isValid: false
  })
  const titleInputHandler = useCallback((id,value, isValid )=>{
      
  }, [])
  const descriptionInputHandler = useCallback((id,value, isValid )=>{
      
  }, [])
  return (
    <form className="place-form">
      <Input
        id='title'
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
      id='description'
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description (at least 5 characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;

