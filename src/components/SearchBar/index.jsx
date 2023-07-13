import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom'

export default function SearchBar(){
  return(
    <div className="search-bar">
      <input type="text" className="search-text" placeholder="Pesquisar"/>
      <Link to="/produtos/" className="search-button">
        <AiOutlineSearch size="40px" color='#19C8DB'/>
      </Link>
    </div> 
  );
}