import Image from '../../images/values.jpg'

import { IoDiamond } from "react-icons/io5";
import { values } from '../../data';
import SectionHead from '../Programs/SectionHead';
import Card from '../../UI/Card';


const Values = () => {
  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">

          <div className="values__image">
            <img src={Image} alt="Valores" />
          </div>

        </div>
        <div className="values__right">
          <SectionHead icon={<IoDiamond/>} title="Values" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, assumenda! Voluptas, ducimus sapiente! Vitae, voluptate.
          </p>
          <div className="values__wrapper">
            {
              values.map(({id, icon, title, desc}) => {
                return (
                  <Card className="values__value">
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values