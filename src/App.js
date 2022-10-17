import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Acessibilidade from './pages/Acessibilidade';
import Carreira from './pages/Carreira';
import Contato from './pages/Contato';
import NoPage from './pages/NoPage';
import Privacidade from './pages/Privacidade';
import SobreAHub from './pages/SobreAHub';
import Layout from './pages/Layout';
import ServicosBpoBps from './pages/BpoBps';
import ServicoConsultoria from './pages/Consultoria';
import ServicosOnDemand from './pages/OnDemand';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre-a-hub" element={<SobreAHub />} />
          <Route path="/servicos-bpo-bps" element={<ServicosBpoBps />} />
          <Route path="/servicos-consultoria" element={<ServicoConsultoria />} />
          <Route path="/servicos-on-demand" element={<ServicosOnDemand/>} />
          <Route path="/carreira" element={<Carreira/>} />
          <Route path="/privacidade-e-cookies" element={<Privacidade/>} />
          <Route path="/acessibilidade" element={<Acessibilidade/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
