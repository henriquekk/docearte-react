import React from 'react';
import './Modal.css';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai'

export default function Modal({ isOpen, closeModal }) {
  if(isOpen){ 
    return(
      <div id='modal'>
        <div className='modal-header'>
          <h1>Seja bem vindo(a) a</h1>
          <h2>Doce Arte Studio!</h2>
          <button id="close-modal" onClick={closeModal}><AiFillCloseCircle size="40px" color='#19C8DB'/></button>
        </div>
        <div className='login-container'>
          <form className='login-form'>
            <input className='login-input' type='email' placeholder='e-mail' required/>
            <span className="login-input-border"></span>
            <input className='login-input' type='password' placeholder='senha' required/>
            <span className="login-input-border"></span>
            <Button>Entrar</Button>
            <Link className='login-reset' to={'/'}>Esqueci minha senha</Link>
          </form>
        </div>
      </div>
    )
  }
}