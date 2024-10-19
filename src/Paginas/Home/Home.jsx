// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeStyle.css';
import usersData from '../Perfil/usersData';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const [showPapelaria, setShowPapelaria] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const handlePapelariaClick = () => {
    setShowPapelaria(!showPapelaria);
  };

  return (
    <div className="home-container">
      <header className="home-fixed-header">
        <img src="/novalogo2.png" alt="Logo" className="home-logo" />
        <div className="home-header-container">
          <nav>
            <ul>
              {user.role !== 'adm' && (
                <li>
                  <button className="home-button">
                    <Link to={`/perfil/${user.email}`}>Perfil</Link>
                  </button>
                </li>
              )}
              <li>
                <button className="home-button">
                  <Link to="/Unahome">Equipe Una</Link>
                </button>
              </li>
              <li>
                <button className="home-button">
                  <Link to="/Plantoes">Plantão</Link>
                </button>
              </li>
              <li>
                <button className="home-button" onClick={handleLogout}>
                  <Link to="/login">Sair</Link>
                </button>
              </li>
              <li>
                <button className="home-button">
                <Link to="/Kanban">Gestão de Clientes</Link>
                </button>
              </li>
              <li>
                <button className="home-button" onClick={handlePapelariaClick}>
                  Papelaria
                </button>
                {showPapelaria && (
                  <div className="papelaria-menu">
                    <ul>
                      <li>
                        <a href="public\papelaria\FICHA DE VISITA.docx" download>
                          Ficha de Visita
                        </a>
                      </li>
                      <li>
                        <a href="public\papelaria\Proposta  de Compra PDF .pdf" download>
                          Proposta de Compra
                        </a>
                      </li>
                      <li>
                        <a href="public\papelaria\ficha_imovel (8).pdf" download>
                          Ficha de Imóvel
                        </a>
                      </li>
                      <li>
                        <a href="public\papelaria\ficha_terreno (3).pdf" download>
                          Ficha de Terreno
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="home-controle">
          <div className="home-controle-container">
            <h1>Controle de Agenciamentos - Equipe Centro</h1>
            <div className="home-button-container">
              <button className="home-button">
                <Link to="/Mensal">Controle Mensal</Link>
              </button>
              <button className="home-button">
                <Link to="/Trimestral">Controle Trimestral</Link>
              </button>
              <button className="home-button">
                <Link to="/semestral">Controle Semestral</Link>
              </button>
              <button className="home-button">
                <Link to="/controle-anual">Controle Anual</Link>
              </button>
            </div>
            {user.role === 'adm' && (
              <div className="home-select-container">
                <select
                  id="selecionarCorretor"
                  onChange={(event) => navigate(`/perfil/${event.target.value}`)}
                >
                  <option value="">Selecione um Corretor</option>
                  {usersData.map(user => (
                    <option key={user.email} value={user.email}>
                      {user.profile.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;