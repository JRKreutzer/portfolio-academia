import Logo from '../../images/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className='logo'>
            <img src={Logo} alt="Logo Footer" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci totam voluptatem animi eum hic!
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com/in/josé-kreutzer-614372173" target="_blank" rel='noreferrer nooponer'>
              <FaLinkedin />
            </a>
            <a href="https://github.com/JRKreutzer" target="_blank" rel='noreferrer nooponer'>
              <FaGithubSquare />
            </a>
            <a href="https://www.instagram.com/jr.kreutzer/" target="_blank" rel='noreferrer nooponer'>
              <AiOutlineInstagram />
            </a>
            <a href="https://twitter.com/JoseKreutz66490" target="_blank" rel='noreferrer nooponer'>
              <FaXTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">Sobre</Link>
          <Link to="/gallery">Galeria</Link>
          <Link to="/plans">Planos</Link>
          <Link to="/trainers">Treinadores</Link>
          <Link to="/contact">Contato</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Estudos de Caso</Link>
          <Link to="/s">Eventos</Link>
          <Link to="/s">Comunidades</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Entre em Contato</h4>
          <Link to="/contact">Fale Conosco</Link>
          <Link to="/s">Suporte</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2024 EGATOR TUTORIALS &copy; All Rights Reserved</small><br/>
        <small>José Rodolfo Kreutzer</small>
      </div>
    </footer>
  )
}

export default Footer