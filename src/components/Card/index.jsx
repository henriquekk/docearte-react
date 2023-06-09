import './Card.css';
import caneca from 'assets/images/caneca.png';

export default function Card(){
  return(
      <div className="caixa-produtos">
        <img className="imagem-produto" src={caneca} alt="Caneca"/>
        <p className="descricao-produto">Caneca de Flores</p>
        <p className="preco-produto">R$ 40,00</p>
        <div className='btn'>
          <button className='ver-produto-btn'>Ver produto</button>
        </div>
      </div>
  );
}