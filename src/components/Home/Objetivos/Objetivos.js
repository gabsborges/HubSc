import './Objetivos.css'
import { Link } from 'react-router-dom'

function Objetivos() {
    return (
        <div className='objetivos'>
            <div className='objetivos-texto'>
                <h2>O objetivo de nosso time HUB é trazer <span>insights relevantes</span> para o seu negócio.</h2>
                <Link to="/contato">Entrar em contato agora</Link>
            </div>
            <div className='objetivos-img'>
            <img src='/hub-banner-light.png'/>
            </div>
        </div>
    )
}

export default Objetivos