import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'App.css';
import HomePage from "pages/HomePage";
import Carrinho from "pages/Carrinho";
import Produtos from "pages/Produtos";
import Compra from 'pages/Compra';

export default function App() {
  
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/produto" element={<Compra />} />
      </Routes>
    </Router>
  );
}
