import './Decisoes.css'
import { Link } from 'react-router-dom'

function Decisoes() {
    return (
        <div className='decisoes'>
            <h2>Decisões corretas <br/><span>mudam</span> o jogo</h2>
            <p>Você pode focar em seu core business e nas principais atividades do seu negócio, enquanto a HUB foca nos processos, manutenção e otimização de outros departamentos que são essenciais para o seu negócio.</p>
            <Link to="/contato">Entrar em contato agora</Link>
        </div>
    )
}

export default Decisoes