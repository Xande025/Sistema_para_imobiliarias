// Header.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'; // Certifique-se de que este arquivo CSS existe
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="kanban-header">
      <img 
        src="fotosPerfis\Duduenri.jpg" // Ajuste o caminho da imagem
        alt="Perfil" 
        className="profile-image" 
      />
      <h1>Eduardo Henrique</h1>
      <button className='but'>
            <Link to="/home">Voltar para Home</Link>
          </button>
    </header>
    
  );
}

export default Header;