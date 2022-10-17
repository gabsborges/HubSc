import Consultoria from "../components/Servicos-consultoria/Consultoria/Consultoria"
import ConsultoriaCard from "../components/Servicos-consultoria/ConsultoriaCard/ConsultoriaCard"
import FooterConsultoria from "../components/Servicos-consultoria/FooterConsultoria/FooterConsultoria"
import HeaderConsultoria from "../components/Servicos-consultoria/HeaderConsultoria/HeaderConsultoria"

function ServicoConsultoria() {
    return (
        <div className="servicoConsultoria">
            <HeaderConsultoria/>
            <Consultoria/>
            <ConsultoriaCard/>
            <div className="footer-section">
                <FooterConsultoria/>
            </div>
        </div>
    )
}

export default ServicoConsultoria