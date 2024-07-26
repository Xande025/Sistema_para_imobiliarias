import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeStyle.css';

const Unahome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser')); // Obtém o usuário logado do localStorage

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="home-fixed-header">
        <img src="/logo.png" alt="Logo" className="home-logo" />
        <div className="home-header-container">
          <nav>
            <ul>
              <li>
                <button className="home-button">
                  <Link to={`/perfil/${user.email}`}>Perfil corretores</Link>
                </button>
              </li>
              <li>
                <button className="home-button">
                  <Link to="/home">Equipe Centro</Link>
                </button>
              </li>
              <li>
                <button className="home-button" onClick={handleLogout}>
                  <Link to="/login">Sair</Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="home-controle">
          <div className="home-controle-container">
            <h1>Controle de Agenciamentos - Equipe Una</h1>
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
            <div className="home-select-container">
              <select id="selecionarCorretor" onChange={(event) => navigate(`/perfil/${event.target.value}`)}>
                <option value="">Selecione um Corretor</option>
                {/* Adicione opções de corretores aqui */}
              </select>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Unahome;
