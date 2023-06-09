import SearchBar from "components/SearchBar";
import "./Header.css"
import logo from 'assets/images/logo.png'
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';

export default function Header(){
  return(
    <header>
      <div className="header-area">
        <a href="/"><img src={logo} alt="Logo Doce Arte Studio" width="150px" /></a>
        
        <SearchBar/>
        
        <nav>
          <ul>
            <li><BsCart3 size="30px" color="#fff"/></li>
            <li><AiOutlineUser size="30px" color="#fff"/></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}