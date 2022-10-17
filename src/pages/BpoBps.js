import BpoBps from "../components/Servicos-bpo-bps/BpoBps/BpoBps"
import CardsBpo from "../components/Servicos-bpo-bps/CardsBpo/CardsBpo"
import FooterBpoBps from "../components/Servicos-bpo-bps/FooterBpoBps/FooterBpoBps"
import HeaderBpoBps from "../components/Servicos-bpo-bps/HeaderBpoBps/HeaderBpoBps"

function ServicosBpoBps() {
    return (
        <div className="servicosBpoBps">
            <HeaderBpoBps/>
            <BpoBps/>
            <CardsBpo/>
            <div className="footer-section">
                <FooterBpoBps/>
            </div>
        </div>
    )
}

export default ServicosBpoBps