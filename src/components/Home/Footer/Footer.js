import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-menu'>
                <div className='footer-menu-empresas'>
                    <Link to='/'><img src='/logo.png' alt='Imagem da Logo'/></Link>
                    <a href='https://alloymit.com/'><img src='/selo-alloypng.png' alt='Imagem da AlloyMit'/></a>
                </div>
                <div className='footer-menu-itens'>
                <nav>
                        <ul className="menu-footer">
                            <li className="ativo"><Link to='/'>HOME</Link></li>
                            <li><span className="hover">SERVIÇOS<i className="fa-solid fa-chevron-down chevron-down"></i><i className="fa-solid fa-chevron-right"></i></span>
                                <ul className="submenu">
                                    <li><Link to='/servicos-bpo-bps'>BPO/BPS</Link></li>
                                    <li><Link to='servicos-consultoria'>CONSULTORIA</Link></li>
                                    <li><Link to='/servicos-on-demand'>SERVIÇOS ON DEMAND</Link></li>
                                </ul>
                            </li>
                            <li><Link to='sobre-a-hub'>SOBRE A HUB</Link></li>
                            <li><Link to='carreira'>CARREIRA</Link></li>
                            <li><Link to='/privacidade-e-cookies'>PRIVACIDADE E COOKIES</Link></li>
                            <li><Link to='/acessibilidade'>ACESSIBILIDADE</Link></li>
                            <li><Link to="/contato">CONTATO</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='footer-redes-e-contatos'>
                <div className='footer-dados'>
                    <div className='footer-dados-endereco'>
                        <i className="fa-solid fa-location-dot"></i>
                        <div className='footer-dados-endereco-texto'>
                        <p>ED.ALLOYMIT</p>
                        <p>RUA BARTOLOMEU DE GUSMÃO, 290</p>
                        <p>VILA MARIANA/SP – CEP 04111-020</p>
                        </div>
                    </div>
                    <div className='footer-dados-contatos'>
                        <p><i className="fa-solid fa-phone"></i>(11) 3257-1717</p>
                        <p><i className="fa-solid fa-phone"></i>(11) 91192-5479</p>
                        <p><i className="fa-solid fa-envelope"></i>SAC@HUBSC.COM.BR</p>
                    </div>
                </div>
                <div className='footer-dados-icones'>
                <a href="https://www.linkedin.com/company/hub-sc" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/hubsc_oficial" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/hubservicoscompartilhados" target="_blank" rel='noreferrer'><i className="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>© copyright 2021 – Letter Consulting. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer