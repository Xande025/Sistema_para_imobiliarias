import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeStyle.css';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser')); // Obtém o usuário logado do localStorage

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <div className="container">
      <header className="fixed-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="header-container">
          <nav>
            <ul>
              <li>
                <button className='Butoes'>
                  <Link to={`/perfil/${user.email}`}>Perfil corretores</Link>
                </button>
              </li>
              <li className="submenu-parent">
                <button className='Butoes'>
                  <Link to="#">Cadastrar</Link>
                </button>
                <ul className="submenu">
                  <li>
                    <button className='Butoes'>
                      <Link to="/Index">Corretores</Link>
                    </button>
                  </li>
                  <li>
                    <button className='Butoes'>
                      <Link to="/Agenciamento">Agenciamentos</Link>
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button className='Butoes'>
                  <Link to="/Unahome">Equipe Una</Link>
                </button>
              </li>
              <li>
                <button className='Butoes' onClick={handleLogout}>
                  <Link to="/login">Sair</Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className='Controle'>
          <div className="controle-container">
            <h1>Controle de Agenciamentos - Equipe Centro</h1>
            <div className="button-container">
              <button className='Butoes'>
                <Link to="/Mensal">Controle Mensal</Link>
              </button>
              <button className='Butoes'>
                <Link to="/Trimestral">Controle Trimestral</Link>
              </button>
              <button className='Butoes'>
                <Link to="/semestral">Controle Semestral</Link>
              </button>
              <button className='Butoes'>
                <Link to="/controle-anual">Controle Anual</Link>
              </button>
            </div>
            <div className="select-container">
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

export default Home;
