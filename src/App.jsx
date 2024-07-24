import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Paginas/Login/login'; // Verifique se o caminho e a nomenclatura estão corretos
import Home from './Paginas/Home/Home';
import Perfil from './Paginas/Perfil/Perfil';
import Mensal from './Paginas/Tabelas/Mensal';
import Index from './Paginas/AdiCorretor/Index';
import Agenciamento from './Paginas/AdiAgenciamento/Agenciamento';
import Trimestral from './Paginas/Tabelas/Trimestral';
import Semestral from './Paginas/Tabelas/Semestral';
import Unahome from './Paginas/Home/Unahome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Unahome" element={<Unahome />} />
        <Route path="/perfil/:email" element={<Perfil />} />
        <Route path="/Mensal" element={<Mensal />} />
        <Route path="/index" element={<Index />} />
        <Route path="/agenciamento" element={<Agenciamento />} />
        <Route path="/trimestral" element={<Trimestral />} />
        <Route path="/semestral" element={<Semestral />} />
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redireciona para login */}
      </Routes>
    </Router>
  );
}

export default App;
