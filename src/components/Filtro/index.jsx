import { useEffect } from 'react';
import './Filtro.css';

export default function Filtro({ setActiveCategory, activeCategory, setFiltered, products }) {
  useEffect(() => {
    if(activeCategory === ''){
      setFiltered(products);
      return;
    }
    const filtered = products.filter((allProdutos) => allProdutos.categoria.includes(activeCategory));
    setFiltered(filtered);
  },[activeCategory, products, setFiltered])



  return (
    <>
      <div className='filtro-area'>
        <h1 className='filtro-title'>Filtre por categorias:</h1>
        <div className='filtro'>
          <button onClick={() => setActiveCategory('')} className={activeCategory === '' ? "active" : " "}>todos</button>
          <button onClick={() => setActiveCategory('bloquinhos')} className={activeCategory === 'bloquinhos' ? "active" : " "}>bloquinhos</button>
          <button onClick={() => setActiveCategory('cadernos')} className={activeCategory === 'cadernos' ? "active" : " "}>cadernos</button>
          <button onClick={() => setActiveCategory('canecas')} className={activeCategory === 'canecas' ? "active" : " "}>canecas</button>
          <button onClick={() => setActiveCategory('copos')} className={activeCategory === 'copos' ? "active" : " "}>copos</button>
          <button onClick={() => setActiveCategory('festas')} className={activeCategory === 'festas' ? "active" : " "}>festas</button>
          <button onClick={() => setActiveCategory('kits')} className={activeCategory === 'kits' ? "active" : " "}>kits</button>
          <button onClick={() => setActiveCategory('infantil')} className={activeCategory === 'infantil' ? "active" : " "}>infantil</button>
          <button onClick={() => setActiveCategory('xícaras')} className={activeCategory === 'xícaras' ? "active" : " "}>xícaras</button>
        </div>
      </div>
    </>
  );
}

 /* return (
    <>
      <div className='filtro-area'>
        <h1 className='filtro-title'>Filtre por categorias:</h1>
        <div className='filtro'>
          {categorias.map((categoria) => (
            <button value={categoria} className='button-filtro' key={categoria}>
              {categoria}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}*/

