import React from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition }from 'react-transition-group';

import Backdrop from './Backdrop'
import './Modal.css'

const ModalOverlay = props =>{
    const content = (
        <div className={`modal ${props.className}`}
         style={props.sytle}> 
         <header className={`modal__header ${props.headerClass}`}>
            <h2> {props.header}</h2>
         </header>
         <form onSubmit={
            props.onSubmit ? props.onSubmit : event => event.preventDefault
         }
         >
            <div className={`modal__content ${props.contentClass}`}> 
            {props.children}
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
            {props.footer}
            </footer>
         </form>
        </div>
    )
return ReactDOM.createPortal( document.getElementById('modal-hook'))
}


export default function Modal(props) {
  return <React.Fragment>
{props.show && <Backdrop onClick={props.onCancle} />}
<CSSTransition 
in={props.show} 
mountOnEnter 
onmountOnExit
timeout={200}
classNames="modal"
> 
</CSSTransition>
  </React.Fragment>
}
