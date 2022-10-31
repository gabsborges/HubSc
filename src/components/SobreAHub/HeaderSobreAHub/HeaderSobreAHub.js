import './HeaderSobreAHub.css'
import { Outlet, Link } from "react-router-dom";

function HeaderSobreAHub() {
    return (
        <div className='header header-sobre-a-hub'>
            <img className="contato-header-img" src="/hub-logo-preta.svg" />
            <nav>
                <ul className="menu menu-preto">
                    <li><Link to="/">HOME</Link></li>
                    <li><a href="#">SERVIÇOS<i className="fa-solid fa-chevron-down"></i></a>
                        <ul>
                            <li><Link to="/servicos-bpo-bps">BPO/BPS</Link></li>
                            <li><Link to="/servicos-consultoria">CONSULTORIA</Link></li>
                            <li><Link to="/servicos-on-demand">SERVIÇOS ON DEMAND</Link></li>
                        </ul>
                    </li>
                    <li className="ativo"><Link to="/sobre-a-hub">SOBRE A HUB</Link></li>
                    <li><Link to="/contato">CONTATO</Link></li>
                </ul>
            </nav>
            <div className="header-search" >
                <div className="header-icons">
                    <a href="https://www.linkedin.com/company/hub-sc" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/hubsc_oficial" target="blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/hubservicoscompartilhados" target="blank"><i className="fa-brands fa-square-facebook"></i></a>
                </div> 
            </div>
        </div>
    )
}

export default HeaderSobreAHub