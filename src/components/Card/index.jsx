import Button from 'components/Button';
import './Card.css';
import caneca from 'assets/images/caneca.png';
import { Link } from 'react-router-dom';

export default function Card(){
  return(
      <div className="caixa-produtos">
        <img className="imagem-produto" src={caneca} alt="Caneca"/>
        <p className="descricao-produto">Caneca de Flores</p>
        <p className="preco-produto">R$ 40,00</p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>
            Ver produto
          </Button>
        </Link>
      </div>
  );
}