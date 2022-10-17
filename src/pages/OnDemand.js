import CardOnDemad from "../components/ServicosOnDemand/CardOnDemad/CardOnDemad"
import FooterOnDemad from "../components/ServicosOnDemand/FooterOnDemad/FooterOnDemad"
import HeaderOnDemand from "../components/ServicosOnDemand/HeaderOnDemand/HeaderOnDemand"
import SupportOnDemad from "../components/ServicosOnDemand/SupportOnDemad/SupportOnDemad"

function ServicosOnDemand() {
    return (
        <div className="servicosOnDemand">
            <HeaderOnDemand/>
            <SupportOnDemad/>
            <CardOnDemad/>
            <div className="footer-section">
                <FooterOnDemad/>
            </div>
        </div>
    )
}

export default ServicosOnDemand