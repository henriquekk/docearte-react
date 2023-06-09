import './ContentContainer.css'

export default function ContentContainer({ children }){
  return(
    <section className='content-container'>
      {children}
    </section>
  );
}