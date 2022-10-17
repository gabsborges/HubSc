import { Link } from 'react-router-dom'
import './OqueFazemos.css'

function OqueFazemos() {
    return (
        <div className='oqueFazemos'>
            <div className='oqueFazemos-box'>
            <h1>O que fazemos</h1>
            <div className='oqueFazemos-box-texto'>
                <div className='oqueFazemos-box'>
                    <p>Na HUB Serviços Compartilhados, inspiramos confiança e empoderamos a mudança em tudo o que fazemos por nossos clientes, por nossas pessoas e pelas comunidades a que servimos. Nossa visão compartilhada é nos tornarmos a escolha certa nos serviços que oferecemos. A base para isso é a qualidade que aplicamos em todos os aspectos do nosso negócio e o compromisso de contribuir positivamente para o sucesso dos nossos clientes, para o desenvolvimento da sociedade em geral.</p>
                    <p>Cada vez mais queremos ter a certeza de que o trabalho que desempenhamos no dia a dia é coerente com nossos valores e aspirações. O objetivo é enfatizar a importância da participação da HUB Serviços Compartilhados e de cada um de nós na promoção das mudanças de que a sociedade precisa.</p>
                </div>
                <div className='oqueFazemos-box'>
                    <p>Essa mudança reflete a nossa crença na ideia de que todos temos um papel a desempenhar na construção de um mundo mais justo e sustentável. Em linhas gerais, em constante mudanças, modificando hábitos que ajudem a reduzir o nosso impacto ambiental, promovendo os valores da boa governança, da diversidade e da inclusão ou nos envolvendo diretamente em ações sociais que beneficiem as comunidades em que atuamos.</p>
                    <p>Devemos ajudar a promover aspectos da responsabilidade corporativa que são essenciais para o nosso negócio. Isso envolve a qualidade dos nossos serviços, a diversidade das nossas equipes, o nosso compromisso com a comunidade e o nosso impacto ambiental.</p>
                </div>
            </div>
            </div>
            <div className='sobre-pilares'>
                <h2>Abaixo os 5 pilares que estamos estruturados, a saber:</h2>
                <div className='sobre-cards'>
                    <div className='sobre-cards-itens'>
                        <img src='./Objeto-Inteligente-de-Vetor.png'/>
                        <h2>Integridade acima de tudo</h2>
                    </div>
                    <div className='sobre-cards-itens'>
                        <img src='./Objeto-Inteligente-de-Vetor2.png'/>
                        <h2>Fazemos a diferença</h2>
                    </div>
                    <div className='sobre-cards-itens'>
                        <img src='./Objeto-Inteligente-de-Vetor3.png'/>
                        <h2>Cuidado com as pessoas</h2>
                    </div>
                    <div className='sobre-cards-itens'>
                        <img src='./Objeto-Inteligente-de-Vetor4.png'/>
                        <h2>Somos uma equipe</h2>
                    </div>
                    <div className='sobre-cards-itens'>
                        <img src='./Objeto-Inteligente-de-Vetor5.png'/>
                        <h2>Nos desafiamos constantemente</h2>
                    </div>
                </div>
            </div>
            <div className='sobre-alloyMit'>
                <div className='sobre-alloyMit-box'>
                    <h1>A HUB é uma investida e  pertence ao Grupo AlloyMit</h1>
                    <p><strong>O Grupo AlloyMit é uma empresa global com presença local, que atua nos mais diversos mercados, buscando oportunidades onde utiliza seu conhecimento diferenciado devido suas atividades, experiência e networking. Esse diferencial competitivo, aliado ao alto grau de comprometimento, cultura hard-working e hands-on e o fomento de cross-selling entre todas as áreas de negócios, permite ao Grupo atuar de forma única.</strong></p>
                    <p>A inovação e a tecnologia assumem papel estratégico no posicionamento competitivo do Grupo AlloyMit e traduz-se num exercício constante de concessão, experimentação, implementação de novas ideias e soluções que permitem o desenvolvimento de negócios competitivos, garantindo a criação de valor para todos os stakeholders.</p>
                </div>
                <div className='sobre-alloyMit-box'>
                    <img src='./HUB_LOGO_ALLOYMIT_Prancheta-1.svg'/>
                    <p>Atuando multissetorialmente, o Grupo dispõe de uma carteira de participações / investimentos composta por empresas em diferentes setores da economia e em diversos estágios de desenvolvimento, mas que possuem sinergia e estreita relação com as atividades fim da companhia. Focada na gestão fundamentalista de investimentos, o Grupo AlloyMit é uma gestora de recursos independente e detém uma equipe bem estruturada com histórico de sucesso no mercado, além de uma refinada sinergia entre suas áreas de atuação, fator que contribui para o intercâmbio de conhecimentos e, consequentemente, para o sucesso nas operações que estrutura.</p>
                    <Link to='/sobre-a-hub'>Saiba mais</Link>
                </div>
            </div>
            <div className='sobre-colapse-graphic'>
                <img src='./HUB_VERTICAIS_Prancheta-1.svg'/>
                <div className='sobre-colapse-graphic-itens'>
                    <ul className="menu-sanfona">
                        <li className='cor0' tabindex="0"><i className="fa-solid fa-circle"></i>ENGENHARIA<i className="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li>Construção, incorporação e vendas</li>
                            </ul>
                        </li>
                        <li className='cor1' tabindex="1"><i className="fa-solid fa-circle"></i>FINANCE<i className="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li>Open banking, serviços e seguros</li>
                            </ul>
                        </li>
                        <li className='cor2' tabindex="2"><i className="fa-solid fa-circle"></i>INVESTIMENTO<i className="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li>Mesa proprietária de investimento e programas educacionais</li>
                            </ul>
                        </li>
                        <li className='cor3' tabindex="3"><i className="fa-solid fa-circle"></i>FRANQUIAS<i className="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li>Gestão e expansão</li>
                            </ul>
                        </li>
                        <li className='cor4' tabindex="4"><i className="fa-solid fa-circle"></i>TERCEIRIZAÇÃO<i className="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li>BPS, BPO e Consultoria especializada</li>
                            </ul>
                        </li>
                        <li className='cor5' tabindex="5"><i className="fa-solid fa-circle"></i>TELECOM<i className="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li>Chips, rede e aplicativo</li>
                            </ul>
                        </li>
                        <li className='cor6' tabindex="6"><i className="fa-solid fa-circle"></i>CONSULTORIA, IMPOSTOS E AUDITORIA<i className="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li>Consultoria empresarial impostos, M&A e Due Diligence</li>
                            </ul>
                        </li>
                        <li className='cor7' tabindex="7"><i className="fa-solid fa-circle"></i>SOCIAL<i className="fa-solid fa-chevron-down"></i>
                            <ul>
                                <li>Transformação de vidas</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OqueFazemos