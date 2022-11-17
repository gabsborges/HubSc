import './Orcamento.css'

function Orcamento() {
    return (
        <div className='main-orcamento'>
            <div className='orcamento'>
                <div className='orcamento-box'>
                    <div className='orcamento-box-texto'>
                        <h1>Solicite um orçamento</h1>
                        <p>Preencha o formulário eletrônico de solicitação de orçamento HUB Serviços Compartilhados e em breve um de nossos profissionais entrará em contato.</p>
                    </div>
                    <div className='orcamento-box-dados'>

                        <div className='orcamento-box-dados-contatos'>
                            <p><i className="fa-solid fa-phone"></i>(11) 3257-1717</p>
                            <p><i className="fa-solid fa-phone"></i>(11) 91192-5479</p>
                            <p><i className="fa-solid fa-envelope"></i>SAC@HUBSC.COM.BR</p>
                        </div>
                        <div className='orcamento-box-dados-endereco'>
                            <i className="fa-solid fa-location-dot"></i>
                            <div className='orcamento-box-dados-endereco-texto'>
                                <p>Ed. AlloyMit</p>
                                <p>Rua Bartolomeu de Gusmão, 290</p>
                                <p>Vila Mariana/SP – CEP 04111-020</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='orcamento-form-box'>
                    <form className="orcamento-form-area" action="https://paginas.rocks/pages/index/650978" method="post" >
                        <input id="id" name="id" type="hidden" value="650978" />
                        <input id="mid" name="mid" type="hidden" value="650978" />
                        <input id="pid" name="pid" type="hidden" value="20960542" />
                        <input id="list_id" name="list_id" type="hidden" value="650978" />
                        <input id="provider" name="provider" type="hidden" value="leadlovers" />

                        <div className="orcamento-form-area">
                            <label htmlFor="email">E-mail:</label>
                            <input className="form-control form-ll" id="email" name="email" placeholder="Informe o seu email" type="text" />
                        </div>
                        <div className="orcamento-form-area">
                            <label htmlFor="name">Nome:</label>
                            <input className="form-control form-ll" id="name" name="name" placeholder="Informe o seu nome" type="text" />
                        </div>
                        <div className="orcamento-form-area">
                            <label htmlFor="phone">Telefone:</label>
                            <input className="form-control form-ll" id="phone" name="phone" placeholder="Informe o telefone" type="text" />
                        </div>
                        <div className="orcamento-form-area">
                            <label htmlFor="company">Empresa:</label>
                            <input className="form-control form-ll" id="company" name="company" placeholder="Informe o nome da empresa" type="text" />
                        </div>
                        <div className="orcamento-form-area">
                            <label htmlFor="message">Mensagem:</label>
                            <textarea className="form-control form-ll text-form-area" id="message" name="message" placeholder="Digite uma mensagem ou pergunta" maxLength="500" ></textarea>
                        </div>

                        <div className="checkbox-list orcamento-form-area-checkbox" data-required="true">
                            <div className="checkbox">
                                <label className="fixed">
                                    <input id="LGPDValidation" name="LGPDValidation" type="checkbox" value="1" />&nbsp;Sim, desejo receber e-mails sobre artigos, noticias, tendências ou ofertas. O consentimento pode ser retirado a qualquer momento clicando no link de cancelamento de inscrição presente em todas as comunicações por e-mail.
                                </label>
                            </div>
                        </div>
                        <div className="orcamento-form-area-submit">
                            <button className="btn btn-danger" type="submit">Enviar!</button>
                        </div>
                        <input type="hidden" id="source" name="source" value="" />
                        <img className='displayNone' src="https://llimages.com/redirect/redirect.aspx?A=V&p=20960542&m=650978" alt=''/>
                    </form>
                </div>
            </div>
            <div className='orcamento-maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.517527680389!2d-46.634750685432635!3d-23.585765584670774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2aa7ceaac1%3A0x30e9b2040cd24ea0!2sR.%20Bartolomeu%20de%20Gusm%C3%A3o%2C%20290%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004111-020!5e0!3m2!1spt-BR!2sbr!4v1665152388256!5m2!1spt-BR!2sbr" title='Google Maps' width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Orcamento