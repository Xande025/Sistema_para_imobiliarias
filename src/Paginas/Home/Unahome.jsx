import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeStyle.css';

const Unahome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const redirecionarCorretor = (event) => {
    const corretor = event.target.value;
    console.log(`Redirecionando para o corretor: ${corretor}`);
    // Lógica para redirecionar para a página do corretor selecionado
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
                  <Link to="/perfil">Perfil corretores</Link>
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
                  <Link to="/Home">Equipe Centro</Link>
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
            <h1>Controle de Agenciamentos - Parque Una</h1>
            
            <div className="button-container">
              <button className='Butoes'>
                <Link to="/Mensal">Controle Mensal</Link>
              </button>
              <button className='Butoes'>
                <Link to="/Trimestral">Controle Trimestral</Link>
              </button>
              <button className='Butoes'>
                <Link to="/controle-semestral">Controle Semestral</Link>
              </button>
              <button className='Butoes'>
                <Link to="/controle-anual">Controle Anual</Link>
              </button>
            </div>
            <div className="select-container">
              <select id="selecionarCorretor" onChange={redirecionarCorretor}>
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
