
import Card from './../../UI/Card';

const Plan = ({key, name, desc,  price, features}) => {
  return (
    <Card key={key} className='plan'>
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
  )
}

export default Plan