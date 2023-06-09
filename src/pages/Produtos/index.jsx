import Header from 'components/Header';
import './Produtos.css';
import Footer from 'components/Footer';
import Cards from 'components/Card';

export default function Produtos (){
  return(
    <>
      <Header/>
      
      <h1 className='titulo-produtos'>Produtos</h1>

      <Cards/>

      <Footer/>
    </>
  );
}