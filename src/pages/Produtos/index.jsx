import Header from 'components/Header';
import './Produtos.css';
import Footer from 'components/Footer';
import ContentContainer from 'components/ContentContainer';
import PageArea from 'components/PageArea';
import Filtro from 'components/Filtro';
import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react';
import client from 'util/datocms';


export default function Produtos (){

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

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
        setProducts(allProdutos);
        setFiltered(allProdutos);

      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchProducts();
  }, []);


  return(
    <>
      <Header/>
      
      <PageArea>
        <h1 className='prod-title'>Produtos</h1>       
        <Filtro products={products} setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          <ContentContainer>
            <ProductCard limit={false} filtered={filtered}/>
          </ContentContainer>
      </PageArea>

      <Footer/>
    </>
  );
}