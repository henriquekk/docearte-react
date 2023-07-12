import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'App.css';
import HomePage from "pages/HomePage";
import Carrinho from "pages/Carrinho";
import Produtos from "pages/Produtos";
import Compra from 'pages/Compra';
import NaoEncontrada from 'pages/NaoEncontrada';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto/:id" element={<Compra />}/>
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/produto" element={<Compra />} />
        <Route path="*" element={<NaoEncontrada/>}></Route>
      </Routes>
    </Router>
  );
}
