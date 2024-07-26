// Paginas/Tabelas/Filtro2.jsx

import React from 'react';

const Filtro3 = ({ selectedQuarter, setSelectedQuarter }) => {
  const quarters = [
    { value: '1º Semestre', label: '1º Semestre' },
    { value: '2º Semestre', label: '2º Semestre' },
  ];

  return (
    <div className="filtro-trimestres">
      <label htmlFor="selectQuarter">Selecione o trimestre:</label>
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

export default Filtro3;
