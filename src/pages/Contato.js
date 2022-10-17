import FooterContato from "../components/Contato/FooterContato/FooterContato"
import HeaderContato from "../components/Contato/Header/HeaderContato"
import Orcamento from "../components/Contato/Orcamento/Orcamento"


function Contato() {
    return (
        <div className='contato'>
            <HeaderContato />
            <Orcamento />
            <div className="footer-section">
            <FooterContato />
            </div>
        </div>
    )
}

export default Contato