import React from 'react'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import Card from '../../shared/components/UIElements/Card'
import { VALIDATOR_EMAIL,
     VAlIDATOR_MINLENGHT  } 
     from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import './Auth.css'

export default function Auth() {
   const useForm({
        email: {
            value: '', 
            isValid: false
        }, 
        password: {
            value: '', 
            isValid: false
        }
    })
  return (
   <Card className='authentication'>
    <h2>Login Requird</h2>
    <form>
  <Input
   element="input" 
  id="email" 
  type="email"
  lable="E-Mail"
  validators={[VALIDATOR_EMAIL()]}
  errorTect="Please enter a valid email address."
  onCachange
  />
  <Button/>
    </form>
    </Card>
  )
}
