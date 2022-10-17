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
                    <form action="" method="get" className="orcamento-form-area">
                        <div className="orcamento-form-area">
                            <label for="email">E-mail:</label>
                            <input type="email" name="email" id="email" placeholder='Informe seu e-mail' required />
                        </div>
                        <div className="orcamento-form-area">
                            <label for="name">Nome:</label>
                            <input type="text" name="name" id="name" placeholder='Informe seu nome' required />
                        </div>
                        <div className="orcamento-form-area">
                            <label for="telefone">Telefone:</label>
                            <input type="tel" name="telefone" id="telefone" placeholder='Informe seu telefone' required />
                        </div>
                        <div className="orcamento-form-area">
                            <label for="empresa">Empresa:</label>
                            <input type="text" name="empresa" id="empresa" placeholder='Informe sua empresa' required />
                        </div>
                        <div className="orcamento-form-area">
                            <label for="mensagem">Mensagem:</label>
                            <input type="text" name="mensagem" id="mensagem" placeholder='Digite sua mensagem ou pergunta' required />
                        </div>
                        <div className="orcamento-form-area-checkbox">
                            <input type="checkbox" id="lgpdValidation" name="lgpdValidation" value="lgpd" />
                            <label for="lgpdValidation">Sim, desejo receber e-mails sobre artigos, noticias, tendências ou ofertas. O consentimento pode ser retirado a qualquer momento clicando no link de cancelamento de inscrição presente em todas as comunicações por e-mail.</label>
                        </div>
                        <div className="orcamento-form-area-submit">
                            <input type="submit" value="Enviar!" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='orcamento-maps'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.517527680389!2d-46.634750685432635!3d-23.585765584670774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2aa7ceaac1%3A0x30e9b2040cd24ea0!2sR.%20Bartolomeu%20de%20Gusm%C3%A3o%2C%20290%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004111-020!5e0!3m2!1spt-BR!2sbr!4v1665152388256!5m2!1spt-BR!2sbr" width="100%" height="320" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Orcamento


