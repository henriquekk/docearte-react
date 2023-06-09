import Footer from "components/Footer";
import Header from "../../components/Header";
import "./HomePage.css"
import Card from "components/Card";
import Button from "components/Button";
import ContentContainer from "components/ContentContainer";

export default function HomePage(){
  return(
    <>
      <Header />
      <div className="principal-area">
        <h1>Destaques</h1>
        <p>slider</p>
        <h1>Produtos</h1>

        <section className="cards-area">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        

        <Button>
          
        </Button>
      </div>
      <Footer />
    </>
  );
}