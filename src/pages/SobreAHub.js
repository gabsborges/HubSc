import FooterSobreAHub from "../components/SobreAHub/FooterSobreAHub/FooterSobreAHub";
import HeaderSobreAHub from "../components/SobreAHub/HeaderSobreAHub/HeaderSobreAHub";
import OqueFazemos from "../components/SobreAHub/OqueFazemos/OqueFazemos";
import SobreGrafico from "../components/SobreAHub/SobreGrafico/SobreGrafico";
import SobreSobre from "../components/SobreAHub/SobreSobre/SobreSobre";

function SobreAHub() {
    return (
        <div className="headerSobreAHub">
            <HeaderSobreAHub />
            <div className="sobre-main-section">
            <SobreSobre />
            </div>
            <div className="sobre-second-section">
            <SobreGrafico />
            </div>
            <OqueFazemos />
            <div className="footer-section">
            <FooterSobreAHub />
            </div>
        </div>
    )
}

export default SobreAHub