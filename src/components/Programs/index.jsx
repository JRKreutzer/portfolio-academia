import { IoDiamond } from "react-icons/io5";
import SectionHead from "./SectionHead";
import { programs } from "../../data";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import {AiFillCaretRight} from 'react-icons/ai'

const Programs = () => {
  return (
    <section className="programs">

      <div className="container programs__container">
        <SectionHead icon={<IoDiamond />} title="Programas" />
        <div className="programs__wrapper">
          {
            programs.map(({id, icon, title, info, path}) => {
              return (
                <Card className="programs__program" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">Saiba Mais <AiFillCaretRight/></Link>
                </Card>
              )
            })
          }
        </div>
      </div>


    </section>
  )
}

export default Programs