import './Footer.css';
import logo from 'assets/images/logo.png';
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import { SiMercadopago, SiVisa, SiMastercard, SiPix, SiPicpay } from 'react-icons/si';
import { FaBarcode } from 'react-icons/fa';

export default function Footer(){
  return(
    <footer>
      <div className='footer-area'>
        <div>
          <img src={logo} alt="Logo Doce Arte Studio" width="200px" />
          <p className="copyright">&copy; Doce Arte Studio</p>
        </div>

        <nav>
          <ul>
            <li><a href="https://www.instagram.com/doceartestudio"><AiOutlineInstagram size="30px" color="#fff"/></a></li>
            <li><a href="#"><AiOutlineWhatsApp size="30px" color="#fff"/></a></li>
            <li><a href="#"><AiOutlineMail size="30px" color="#fff"/></a></li>
          </ul>
        </nav>

        <div className='footer-pagamentos'>
          <h1>Formas de pagamento</h1>
          <nav>
            <ul>
              <li><SiMercadopago size="35px" color="#fff" /></li>
              <li><SiVisa size="35px" color="#fff" /></li>
              <li><SiMastercard size="35px" color="#fff" /></li>
              <li><SiPix size="35px" color="#fff" /></li>
              <li><FaBarcode size="35px" color="#fff" /></li>
              <li><SiPicpay size="35px" color="#fff" /></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}