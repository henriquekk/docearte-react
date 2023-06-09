import Footer from "components/Footer";
import Header from "../../components/Header";
import "./HomePage.css"
import Card from "components/Card";
import Button from "components/Button";
import ContentContainer from "components/ContentContainer";
import PageArea from "components/PageArea";
import { Link } from "react-router-dom";

export default function HomePage(){
  return(
    <>
      <Header />

      <PageArea>
        <h1 className="home-title">Destaques</h1>
        <p className="home-p">slider</p>
        <h1 className="home-title">Produtos</h1>

        <ContentContainer>
          <Card />
          <Card />
          <Card />
          <Card />
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