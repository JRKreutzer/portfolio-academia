import{FaQuestion} from 'react-icons/fa'
import { faqs } from '../../data'
import SectionHead from '../Programs/SectionHead'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="Perguntas Frequentes" />
        <div className="faqs__wrapper">
          {
            faqs.map(({id, question, answer}) => {
              return <FAQ 
                        key={id}  
                        question={question} 
                        answer={answer}
                      />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs