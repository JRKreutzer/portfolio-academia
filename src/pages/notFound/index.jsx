import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notFound__container">
        <h2>Página não encontrada</h2>
        <Link to="/" className='btn'>Volta para Página Principal</Link>
      </div>
    </section>
  )
}

export default NotFound