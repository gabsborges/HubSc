import './Servicos.css'
import { Link } from 'react-router-dom'

function Servicos() {
    return (
        < div className='servicos'>
            <div className='servicos-texto'>
                <h1>Nossos Serviços</h1>
                <p>A HUB auxilia as empresas a focarem seu core business, com serviços de terceirização “Business Process Solutions” (BPS).</p>
    
                <p>Oferecemos soluções em todas as atividades de suporte, da contabilidade à administração financeira e de pessoal, com serviços completamente integrados a  outras áreas de negócios da HUB.</p>
                <Link to="/servicos-bpo-bps">Saiba mais</Link>
            </div>
            <img src="/hub-colmeia.svg"/>
        </div>
    )
}

export default Servicos