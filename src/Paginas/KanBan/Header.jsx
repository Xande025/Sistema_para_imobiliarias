// Header.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'; // Certifique-se de que este arquivo CSS existe

function Header() {
  return (
    <header className="kanban-header">
      <img 
        src="/fotosPerfis/CarolC.jpg" // Ajuste o caminho da imagem
        alt="Perfil" 
        className="profile-image" 
      />
      <h1>Caroline Goularte</h1>
    </header>
  );
}

export default Header;