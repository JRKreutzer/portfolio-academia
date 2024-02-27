import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import Header from '../../components/Header'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Entre Em Contato" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic minima totam fugit. Quibusdam, quis reprehenderit.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:jose.kreutzer@gmail.com" target='blank' rel='noreferrer noopener'>
              <MdEmail />
            </a>
            <a href="https://wa.me/+5549999796363" target='blank' rel='noreferrer noopener'>
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact