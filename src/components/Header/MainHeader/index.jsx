import { Link } from "react-router-dom"
import Banner from '../../../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        
        <div className="main__header-left">
          <h4>#100DiasDeTreino</h4>
          <h1>Junte-se Às Lendas Do Mundo Do Fitness</h1>
          <p>Sua academia para conquistar metas fitness com equipamentos modernos e treinamento personalizado.</p>
          <Link to="/plans" className="btn lg">Iniciar</Link>
        </div>
        
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Banner} alt="Banner da Home" />
          </div>
        </div>
      
      </div>
    </header>
  )
}

export default MainHeader