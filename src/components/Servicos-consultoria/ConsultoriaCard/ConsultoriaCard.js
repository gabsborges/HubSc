import './ConsultoriaCard.css'

function ConsultoriaCard() {
    return (
        <div className='consultoriaCard'>
            <div className='consultoriaCard-card'>
                <ul>
                    <li><img src='/check.png' alt='Icone Check'/>Revisão dos processos operacionais, buscando melhorias nos resultados.</li>
                    <li><img src='/check.png' alt='Icone Check'/>Implantação dos processos operacionais, otimizando sua operação</li>
                    <li><img src='/check.png' alt='Icone Check'/>Acompanhamento de implantação dos sistemas</li>
                    <li><img src='/check.png' alt='Icone Check'/>Elaboração e retificação de obrigações fiscais, tais como ECD, ECF, EFD ICMS, EFD Contribuições etc.</li>
                    <li><img src='/check.png' alt='Icone Check'/>Revisão e reprocessamento das operações fiscais, contábeis e de folha</li>
                    <li><img src='/check.png' alt='Icone Check'/>Consultoria Societária</li>
                </ul>
            </div>
        </div>
    )
}

export default ConsultoriaCard