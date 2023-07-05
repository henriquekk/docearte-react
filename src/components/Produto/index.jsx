import React from 'react';
import './Produto.css';
import ContentContainer from 'components/ContentContainer';
import imagemDoProduto from 'assets/images/produtos/prod-1.png'
import Button from 'components/Button';

export default function Produto() {
  return (
    <>
      <ContentContainer>
        <div className='product-area'>
          <div className='product-box'>
            <img src={imagemDoProduto} alt=""/>
            <div className='product-info'>
              <h1 className='titulo-compra'>Nome do produto</h1>
              <p className='preco-compra'>R$ 40,00</p>
            </div>
           
          </div>
          <div className='descricao-compra'>
            <h1>Descrição do produto</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eos, totam voluptates doloribus sit corporis accusantium nostrum repudiandae cumque nihil ad corrupti, dolorum suscipit obcaecati libero consequuntur! A, impedit ex!</p>
            <Button>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
        

        
        

      </ContentContainer>
    </>
  )
}
