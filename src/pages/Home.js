import Decisoes from '../components/Home/Decisoes/Decisoes';
import Footer from '../components/Home/Footer/Footer';
import Header from '../components/Home/Header/Header'
import MainSlider from '../components/Home/MainSlider/MainSlider';
import NossaAtuacao from '../components/Home/NossaAtuacao/NossaAtuacao';
import Objetivos from '../components/Home/Objetivos/Objetivos';
import Parceiros from '../components/Home/Parceiros/Parceiros';
import Proporcionamos from '../components/Home/Proporcionamos/Proporcionamos';
import Servicos from '../components/Home/Servicos/Servicos';
import SobreAHub from '../components/Home/SobreAHub/SobreAHub'

function Home() {
    return (
        <div className='home'>
            <div className='main-section'>
                <Header />
                <MainSlider />
                </div>
                <div className='second-section'>
                < NossaAtuacao />
                <SobreAHub />
                <Proporcionamos />
                <Decisoes />
                <Servicos />
                <Objetivos />
                <Parceiros />
                </div>
                <div className='footer-section'>
                <Footer />
                </div>
        </div>
    )
}

export default Home