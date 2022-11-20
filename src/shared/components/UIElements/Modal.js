import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

const ModalOverlay = props =>{
return ReactDOM.createPortal( document.getElementById('modal-hook'))
}


export default function Modal(props) {
  return (
    <div>Modal</div>
  )
}
