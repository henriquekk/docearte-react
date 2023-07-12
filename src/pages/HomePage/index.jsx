import Footer from "components/Footer";
import Header from "../../components/Header";
import "./HomePage.css";
import Button from "components/Button";
import ContentContainer from "components/ContentContainer";
import PageArea from "components/PageArea";
import { Link } from "react-router-dom";
import Carousel from "components/Carousel";
import ProductCard from "components/ProductCard";
import { useEffect, useState } from 'react';
import client from 'util/datocms';

export default function HomePage() {
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
              imagem {
                url
              }
            }
          }
        `;

        const { allProdutos } = await client.request(query);
        setProducts(allProdutos);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const filtered = products.slice(0, 4);

  return (
    <>
      <Header />

      <PageArea>
        <h1 className="home-title">Destaques</h1>
        <Carousel />
        <h1 className="home-title">Produtos</h1>

        <ContentContainer>
          <ProductCard limit={true} filtered={filtered} />
        </ContentContainer>

        <Link to="/produtos" style={{ textDecoration: 'none' }}>
          <Button>
            Veja mais produtos
          </Button>
        </Link>
      </PageArea>

      <Footer />
    </>
  );
}
