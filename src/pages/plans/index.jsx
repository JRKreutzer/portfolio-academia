import HeaderImage from '../../images/header_bg_4.jpg'
import { plans } from '../../data'
import Header from '../../components/Header'
import Plan from '../../components/Plan';
import './plans.css'

const Plans = () => {
  return (
    <>
      <Header title="Planos de Adesão" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, voluptatum.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return <Plan 
                key={id} 
                name={name} 
                desc={desc} 
                price={price} 
                features={features} 
              />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans