import Header from '../../components/Header'
import BannerImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="Sobre Nós" image={BannerImage} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, culpa nam! Unde accusamus excepturi vel eum, aspernatur atque tempora architecto?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Nossa História" />
          </div>
          <div className="about__section-content">
            <h1>Nossa História</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis assumenda temporibus consequuntur voluptatibus? Doloremque porro reprehenderit laboriosam consectetur cum impedit saepe ratione placeat aliquam temporibus nobis quo molestiae explicabo, vel dolore sint nisi consequatur quod, ex ut aut eos atque similique? Necessitatibus consequatur error ex, fugit aspernatur doloribus porro quas!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, dignissimos at esse ipsam fuga distinctio sit cupiditate nesciunt itaque harum, reprehenderit officiis, quis numquam nisi delectus facere in dolores doloremque quisquam. Possimus beatae asperiores molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores sequi at numquam cupiditate officia ducimus sit repellendus fuga rem!
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Nossa Visão</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit saepe architecto quos excepturi, doloribus alias repudiandae temporibus, ducimus explicabo adipisci dolorem quasi in! Quae quasi ad repellat. Suscipit voluptatibus officia quia quas nobis quidem?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dolorum explicabo officiis eaque error iusto commodi incidunt minima. Maiores voluptatum reprehenderit, itaque cum reiciendis nostrum!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Nossa Visão" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Nossa Missão" />
          </div>
          <div className="about__section-content">
            <h1>Nossa Missão</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit amet quis mollitia, laudantium exercitationem autem illum nihil dolorem laborum qui. Fugit dolore voluptatum aspernatur earum quia, molestias asperiores tempora ducimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore iure voluptatem, laborum omnis at.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At necessitatibus saepe modi a dolorem minima, repudiandae facilis dignissimos? Architecto, nam!
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default About