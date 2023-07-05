import SearchBar from "components/SearchBar";
import "./Header.css"
import logo from 'assets/images/logo.png'
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import Modal from "components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){

  const [openModal, setOpenModal] = useState(false)

  return(
    <header>
      <div className="header-area">
        <a href="/"><img src={logo} alt="Logo Doce Arte Studio" width="150px" /></a>
        
        <SearchBar/>
        
        <nav>
          <ul>
            <li><Link to="/"><AiOutlineHome size="30px" color="#fff"/></Link></li>
            <li><Link to="/carrinho"><BsCart3 size="30px" color="#fff"/></Link></li>
            <li><button className="login-btn" onClick={() => setOpenModal(true)}><AiOutlineUser size="30px" color="#fff"/></button></li>
            <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}/>
          </ul>
        </nav>
      </div>
    </header>
  )
}