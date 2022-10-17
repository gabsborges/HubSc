import FooterCarreira from "../components/Carreira/FooterCarreira/FooterCarreira";
import HeaderCarreira from "../components/Carreira/HeaderCarreira/HeaderCarreira";
import TrabalheConosco from "../components/Carreira/TrabalheConosco/TrabalheConosco";

function Carreira() {
    return (
        <div className="carreira">
            <HeaderCarreira/>
            <div className="trabalheConosco-section">
            <TrabalheConosco/>
            </div>
            <div className="footer-section">
                <FooterCarreira/>
            </div>
        </div>
    )
}

export default Carreira