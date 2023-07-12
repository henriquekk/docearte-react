import Button from 'components/Button';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import client from '../../util/datocms';

const ProductCard = ({ limit, filtered }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          {
            allProdutos {
              id
              titulo
              preco
              categoria
              imagem{
                url
              }
            }
          }
        `;

        const { allProdutos } = await client.request(query);
        const limitedProducts = limit ? products.slice(0, 4) : allProdutos;
        setProducts(limitedProducts);

      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='produtos-area'>
      {filtered.map((produto) => (
        <div className='caixa-produtos' key={produto.id}>
          <img className="imagem-produto" src={produto.imagem.url} alt={produto.titulo} />
          <p className="descricao-produto">{produto.titulo}</p>
          <p className="preco-produto">{produto.preco}</p>
          <Link to={`/produto/${produto.id}`} style={{ textDecoration: 'none' }}>
            <Button>Ver produto</Button>
          </Link>
          <span className='categoria'>{produto.categoria}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;


/*export default function Card(){
  return(
      <div className="caixa-produtos">
        <img className="imagem-produto" src={imagem} alt="Caneca"/>
        <p className="descricao-produto">Caneca "Gente que ama Gatinhos"</p>
        <p className="preco-produto">R$ 40,00</p>
        <Link to='/produto/'style={{ textDecoration: 'none' }}>
          <Button>
            Ver produto
          </Button>
        </Link>
      </div>
  );
}




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