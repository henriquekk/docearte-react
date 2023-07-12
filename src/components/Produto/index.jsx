import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Produto.css';
import ContentContainer from 'components/ContentContainer';
import Button from 'components/Button';
import client from 'util/datocms';
import NaoEncontrada from 'pages/NaoEncontrada';

export default function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const query = `
          {
            produto(filter: { id: { eq: "${id}" } }) {
              id
              titulo
              preco
              categoria
              imagem {
                url
              }
              descricao
            }
          }
        `;

        const { produto } = await client.request(query);
        setProduto(produto);
      } catch (error) {
        console.error('Erro ao obter o produto:', error);
      }
    };

    fetchProduto();
  }, [id]);

  if (!produto) {
    return <NaoEncontrada />;
  }

 

  return (
    <>
      <ContentContainer>
        <div className='product-area'>
          <div className='product-box'>
            <img src={produto.imagem.url} alt={produto.titulo} />
            <div className='product-info'>
              <h1 className='titulo-compra'>{produto.titulo}</h1>
              <p className='preco-compra'>{produto.preco}</p>
            </div>
          </div>
          <div className='descricao-compra'>
            <h1>Descrição do produto</h1>
            <p>{produto.descricao}</p>
            <Button>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </ContentContainer>
    </>
  )
}
