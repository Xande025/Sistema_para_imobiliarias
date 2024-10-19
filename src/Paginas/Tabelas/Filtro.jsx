// Paginas/Tabelas/Filtro.jsx

// import React from 'react';
import PropTypes from 'prop-types'; // Importando PropTypes

const Filtro = ({ selectedMonth, setSelectedMonth }) => {
  const months = [
    { value: 'Janeiro', label: 'Janeiro' },
    { value: 'Fevereiro', label: 'Fevereiro' },
    { value: 'Março', label: 'Março' },
    { value: 'Abril', label: 'Abril' },
    { value: 'Maio', label: 'Maio' },
    { value: 'Junho', label: 'Junho' },
    { value: 'Julho', label: 'Julho' },
    { value: 'Agosto', label: 'Agosto' },
    { value: 'Setembro', label: 'Setembro' },
    { value: 'Outubro', label: 'Outubro' },
    { value: 'Novembro', label: 'Novembro' },
    { value: 'Dezembro', label: 'Dezembro' },
  ];

  return (
    <div className="filtro-meses">
      <label htmlFor="selectMonth">Selecione o mês:</label>
      <select
        id="selectMonth"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>{month.label}</option>
        ))}
      </select>
    </div>
  );
}

// Definindo as propTypes para o componente
Filtro.propTypes = {
  selectedMonth: PropTypes.string.isRequired, // Validação para selectedMonth
  setSelectedMonth: PropTypes.func.isRequired, // Validação para setSelectedMonth
};

export default Filtro;