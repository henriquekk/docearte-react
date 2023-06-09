import './PageArea.css';

export default function PageArea({ children }){
  return(
    <section className='principal-area'>
      {children}
    </section>
  );
}