import './SobreSobre.css'
import { Link } from 'react-router-dom'

function SobreSobre() {
    return (
        <div className='sobreSobre'>
            <div className='sobre-sobre'>
                <img src='/hub-banner-sobre-img.png'/>
                <div className='sobre-sobre-box'>
                    <h1>Sobre a HUB</h1>
                    <div className='sobre-sobre-box-texto'>
                    <p><strong>Somos uma empresa de consultoria especializada para ajudarmos nossos clientes a resolver seus problemas mais complexos em seus processos de negócios, de maneira coordenada e integrada.</strong></p>
                    <p>Independentemente da função ou do setor, nosso objetivo é ajudar a organização a melhorar as operações e o desempenho no mercado, com uma transição suave e rápido retorno do investimento, para atingir estabilidade no longo prazo, previsão e melhoria contínua, potenciais pelos quais os provedores de serviços de outsourcing são conhecidos.</p>
                    <p>Assim, conseguimos alocar os melhores recursos para cuidar das demandas específicas dos clientes, trabalhando sempre que necessário em grupos multidisciplinares potencializando nossa capacidade de entendimento do seu negócio e nos tornando um parceiro relevante.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreSobre