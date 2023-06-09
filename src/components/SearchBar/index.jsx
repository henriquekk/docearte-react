import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar(){
  return(
    <div className="search-bar">
      <input type="text" className="search-text" placeholder="Pesquisar"/>
      <a href="" className="search-button">
        <AiOutlineSearch size="40px" color='#19C8DB'/>
      </a>
    </div> 
  );
}