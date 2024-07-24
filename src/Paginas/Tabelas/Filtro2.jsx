// Paginas/Tabelas/Filtro2.jsx

import React from 'react';

const Filtro2 = ({ selectedQuarter, setSelectedQuarter }) => {
  const quarters = [
    { value: '1º Trimestre', label: '1º Trimestre' },
    { value: '2º Trimestre', label: '2º Trimestre' },
    { value: '3º Trimestre', label: '3º Trimestre' },
    { value: '4º Trimestre', label: '4º Trimestre' },
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

export default Filtro2;
