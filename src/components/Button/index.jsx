import './Button.css';

export default function Button({ children }){
  return(
    <div className="btn">
        <button className="button">
          {children}
        </button>
    </div>
  );
}