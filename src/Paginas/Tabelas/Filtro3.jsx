// Paginas/Tabelas/Filtro3.jsx

// import React from 'react';
import PropTypes from 'prop-types'; // Importando PropTypes

const Filtro3 = ({ selectedQuarter, setSelectedQuarter }) => {
  const quarters = [
    { value: '1º Semestre', label: '1º Semestre' },
    { value: '2º Semestre', label: '2º Semestre' },
  ];

  return (
    <div className="filtro-trimestres">
      <label htmlFor="selectQuarter">Selecione o semestre:</label>
      <select
        id="selectQuarter"
        value={selectedQuarter}
        onChange={(e) => setSelectedQuarter(e.target.value)}
      >
        {quarters.map((quarter) => (
          <option key={quarter.value} value={quarter.value}>{quarter.label}</option>
        ))}
      </select>
    </div>
  );
}

// Definindo as propTypes para o componente
Filtro3.propTypes = {
  selectedQuarter: PropTypes.string.isRequired, // Validação para selectedQuarter
  setSelectedQuarter: PropTypes.func.isRequired, // Validação para setSelectedQuarter
};

export default Filtro3;