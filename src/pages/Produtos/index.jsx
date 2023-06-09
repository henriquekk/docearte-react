import Header from 'components/Header';
import './Produtos.css';
import Footer from 'components/Footer';
import Card from 'components/Card';
import ContentContainer from 'components/ContentContainer';
import PageArea from 'components/PageArea';

export default function Produtos (){
  return(
    <>
      <Header/>
      
      <PageArea>
        <h1 className='prod-title'>Produtos</h1>

        <ContentContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ContentContainer>
      </PageArea>

      <Footer/>
    </>
  );
}