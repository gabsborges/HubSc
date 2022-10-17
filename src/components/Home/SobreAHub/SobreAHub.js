import './SobreAHub.css'
import { Link } from 'react-router-dom'

function SobreAHub() {
    return (
        < div className='sobre-hub'>
            <img src="/hub_banner.png"/>
            <div className='sobre-hub-text'>
                <h1>Sobre a HUB</h1>
                <p>Somos uma empresa de consultoria especializada para ajudarmos nossos clientes a resolver seus problemas mais complexos em seus processos de negócios, de maneira coordenada e integrada.</p>

                <p>Independentemente da função ou do setor, nosso objetivo é ajudar a organização a melhorar as operações e o desempenho no mercado, com uma transição suave e rápido retorno do investimento, para atingir estabilidade no longo prazo, previsão e melhoria contínua, potenciais pelos quais os provedores de serviços de outsourcing são conhecidos.</p>
                <Link to="/sobre-a-hub">Saiba mais</Link>
            </div>
        </div>
    )
}

export default SobreAHub