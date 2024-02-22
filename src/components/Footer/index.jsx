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
            <a href="linkedin.com/in/josé-kreutzer-614372173" target="_blank" rel='noreferrer nooponer'>
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
          <Link to="/about">About</Link>
          <Link to="/plan">Plan</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2024 EGATOR TUTORIALS &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer