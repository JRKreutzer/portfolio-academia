import HeaderImage from '../../images/header_bg_4.jpg'
import { plans } from '../../data'
import Header from '../../components/Header'
import './plans.css'
import Card from './../../UI/Card';

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
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`R$${price}`}</h1><h2>/mês</h2>
                <h4>Benefícios</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Escolher Plano</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans