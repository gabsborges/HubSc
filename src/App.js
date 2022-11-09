import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Acessibilidade from './pages/Acessibilidade';
import Carreira from './pages/Carreira';
import Contato from './pages/Contato';
import NoPage from './pages/NoPage';
import Privacidade from './pages/Privacidade';
import SobreAHub from './pages/SobreAHub';
import ServicosBpoBps from './pages/BpoBps';
import ServicoConsultoria from './pages/Consultoria';
import ServicosOnDemand from './pages/OnDemand';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/contato",
    element: <Contato />
  },
  {
    path: "/sobre-a-hub",
    element: <SobreAHub />
  },
  {
    path: "/servicos-bpo-bps",
    element: <ServicosBpoBps />
  },
  {
    path: "/servicos-consultoria",
    element: <ServicoConsultoria />
  },
  {
    path: "/servicos-on-demand",
    element: <ServicosOnDemand/>
  },
  {
    path: "/carreira",
    element: <Carreira/>
  },
  {
    path: "/privacidade-e-cookies",
    element: <Privacidade/>
  },
  {
    path: "/acessibilidade",
    element: <Acessibilidade/>
  },
  {
    path: "*",
    element: <NoPage/>
  }
])

export { router }