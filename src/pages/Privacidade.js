import FooterPrivacidade from "../components/Privacidade/FooterPrivacidade/FooterPrivacidade"
import HeaderPrivacidade from "../components/Privacidade/HeaderPrivacidade/HeaderPrivacidade"
import PoliticaDePrivacidade from "../components/Privacidade/PoliticaDePrivacidade/PoliticaDePrivacidade"

function Privacidade() {
    return (
        <div className="privacidade">
            <HeaderPrivacidade/>
            <PoliticaDePrivacidade/>
            <div className="footer-section">
                <FooterPrivacidade/>
            </div>
        </div>
    )
}

export default Privacidade