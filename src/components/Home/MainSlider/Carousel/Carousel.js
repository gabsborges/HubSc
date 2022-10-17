import React from 'react';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Outlet, Link } from "react-router-dom";

function CarouselSlider() {
    return (
        <div className='mainSlider'>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <div className='slider'>
                        <h1>Confiabilidade</h1>
                        <div className='slider-texto'>
                            <p>Somos especialistas em solucionar problemas de maneira coordenada e integrada em seus processos de negócios.
                            <br/>
                            Oferecemos alternativas seguras para apoiar nossos clientes no crescimento e evolução de seus negócios.</p>
                            <Link className='botao' to="/servicos-bpo-bps">Saiba mais</Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <div className='slider'>
                        <h1>Segurança e Alta tecnologia</h1>
                        <div className='slider-texto'>
                            <p>Utilizamos a tecnologia em prol dos seus negócios, prevenindo possíveis surpresas desagradáveis e alocando os melhores recursos para cuidar das demandas específicas de nossos clientes.
                                <br/>
                            Utilizamos a tecnologia em prol dos seus negócios, prevenindo riscos e alocando os melhores recursos para cuidar das demandas específicas de nossos clientes.</p>
                            <Link className='botao' to="/servicos-consultoria">Saiba mais</Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <div className='slider'>
                        <h1>Equipe Multidisciplinar</h1>
                        <div className='slider-texto'>
                            <p>Diversificamos nossa equipe com o intuito de gerar soluções criativas e eficientes, concebidas através dos diferentes pontos de vista percebidos pelos profissionais altamente capacitados da HUB.
                            <br/>
                            Nossa equipe é altamente capacitada e se mantem atualizado em todas as áreas de atuação, gerando insights intuitivos e soluções eficientes para a empresa.</p>
                            <Link className='botao' to="/servicos-on-demand">Saiba mais</Link>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}




export default CarouselSlider;