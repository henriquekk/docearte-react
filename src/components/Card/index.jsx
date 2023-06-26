import Button from 'components/Button';
import './Card.css';
import imagem from 'assets/images/produtos/prod-1.png';
import { Link } from 'react-router-dom';

export default function Card(){
  return(
      <div className="caixa-produtos">
        <img className="imagem-produto" src={imagem} alt="Caneca"/>
        <p className="descricao-produto">Caneca "Gente que ama Gatinhos"</p>
        <p className="preco-produto">R$ 40,00</p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>
            Ver produto
          </Button>
        </Link>
      </div>
  );
}


/*

export default function Card({ id, titulo, preco, imgProduto }){
  return(
      <div className="caixa-produtos">
        <img className="imagem-produto" src={imgProduto} alt={titulo}/>
        <p className="descricao-produto">{titulo}</p>
        <p className="preco-produto">{preco}</p>
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <Button>
            Ver produto
          </Button>
        </Link>
      </div>
  );
}

*/