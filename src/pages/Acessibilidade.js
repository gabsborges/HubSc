import AcessibilidadeArea from "../components/Acessibilidade/AcessibilidadeArea/AcessibilidadeArea"
import FooterAcessibilidade from "../components/Acessibilidade/FooterAcessibilidade/FooterAcessibilidade"
import HeaderAcessibilidade from "../components/Acessibilidade/HeaderAcessibilidade/HeaderAcessibilidade"

function Acessibilidade() {
    return (
        <div className="acessibilidade">
            <HeaderAcessibilidade/>
            <AcessibilidadeArea/>
            <div className="footer-section">
                <FooterAcessibilidade/>
            </div>
        </div>
    )
}

export default Acessibilidade