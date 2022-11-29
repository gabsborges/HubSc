import './Cards.css'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards-itens'>
                <div className='wrapper'>
                    <i className="fa-solid fa-people-group"></i>
                    <div className='cards-itens-texto'>
                        <h1>BPO/ BPS</h1>
                        <p>Nosso BPO (Business Process Outsourcing) traz a execução de projetos somada ao gerenciamento de uma equipe de especialistas, focada em objetivos mais pontuais, assegurando o crescimento aliado a qualidade.</p>
                    </div>
                </div>
                <Link to="/servicos-bpo-bps"><i className="fa-solid fa-circle-arrow-right"></i>Saiba mais</Link>
            </div>
            <div className='cards-itens'>
                <div className='wrapper'>
                    <i className="fa-regular fa-comments"></i>
                    <div className='cards-itens-texto'>
                        <h1>Consultoria</h1>
                        <p>Nossa consultoria auxilia na organização das finanças e tomada de decisões, realizamos avaliação da situação financeira e elaboração das melhores soluções estratégicas para alcançar os objetivos.</p>
                    </div>
                </div>
                <Link to="/servicos-consultoria"><i className="fa-solid fa-circle-arrow-right"></i>Saiba mais</Link>
            </div>
            <div className='cards-itens'>
                <div className='wrapper'>
                    <i className="fa-regular fa-lightbulb"></i>
                    <div className='cards-itens-texto'>
                        <h1>Business Support On Demand</h1>
                        <p>O dinamismo dos ambientes de negócios corporativos necessitam de controles internos apurados para acompanhar a complexidade do sistema tributário vigente no Brasil.</p>
                    </div>
                </div>
                <Link to="/servicos-on-demand"><i className="fa-solid fa-circle-arrow-right"></i>Saiba mais</Link>
            </div>
        </div>
    )
}

export default Cards