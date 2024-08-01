// Plantoes.jsx
import React from 'react';
import './Plantoes.css'; // Certifique-se de criar este arquivo para estilos personalizados

const plantaoConfig = {
  1: { manha: 'Gabriel', tarde: 'Theodoro' },
  2: { manha: 'Neto', tarde: 'Rafa' },
  3: { manha: 'Marcio', tarde: 'Laura' },
  4: { manha: 'Carlos', tarde: 'Mariana' },
  5: { manha: 'Claudio', tarde: 'Martini' },
  6: { manha: 'Carol', tarde: 'Marcio' },
  7: { manha: 'Theo', tarde: 'Rafa' },
  8: { manha: 'Neto', tarde: 'Claudio' },
  9: { manha: 'Martini', tarde: 'Illie' },
  10: { manha: 'Theo', tarde: 'João' },
  11: { manha: '', tarde: 'Ana' },
  12: { manha: 'Rafa', tarde: 'Carol' },
  13: { manha: 'Neto', tarde: 'Marcio' },
  14: { manha: 'Claudio', tarde: 'Martini' },
  15: { manha: 'Carol', tarde: 'Illie' },
  16: { manha: 'Theo', tarde: 'Rafa' },
  17: { manha: 'Neto', tarde: 'Ana' },
  18: { manha: 'Claudio', tarde: 'Maria' },
  19: { manha: 'Claudio', tarde: 'Martini' },
  20: { manha: 'Illie', tarde: 'Marcio' },
  21: { manha: 'Carol', tarde: 'Theo' },
  22: { manha: 'Marcio', tarde: 'Rafa' },
  23: { manha: 'Neto', tarde: 'Claudio' },
  24: { manha: 'Martini', tarde: 'Maria' },
  25: { manha: 'Ana', tarde: 'Carlos' },
  26: { manha: 'Rafa', tarde: 'Carol' },
  27: { manha: 'Marcio', tarde: 'Illie' },
  28: { manha: 'Theo', tarde: 'Claudio' },
  29: { manha: 'Neto', tarde: 'Martini' },
  30: { manha: 'Carol', tarde: 'Theo' },
  31: { manha: 'Illie', tarde: 'Carlos' },
};

const Plantoes = () => {
  // Configurações do calendário para agosto de 2024
  const daysInMonth = 31;
  const startDay = 4; // Quinta-feira (1º de agosto de 2024 é uma quinta-feira)

  const renderCalendar = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfWeek = (startDay + i - 1) % 7; // Calcula o dia da semana para o dia atual
      const plantao = plantaoConfig[i] || {};
      days.push(
        <div className="calendar-day" key={i}>
          <div className="calendar-date">{i}</div>
          {(dayOfWeek === 0) ? ( // Exclui domingos
            <div className="calendar-entry">
              <span>Sem plantão</span>
            </div>
          ) : (dayOfWeek === 6) ? ( // Sábados
            <div className="calendar-entry">
              <label>
                Manhã: {plantao.manha || 'N/A'}
              </label>
            </div>
          ) : ( // Outros dias da semana
            <div className="calendar-entry">
              <label>
                Manhã: {plantao.manha || 'N/A'}
              </label>
              <label>
                Tarde: {plantao.tarde || 'N/A'}
              </label>
            </div>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="plantoes-container">
      <h1>Plantões - Agosto 2024</h1>
      <div className="calendar-grid">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
          <div key={day} className="calendar-header">{day}</div>
        ))}
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={index} className="calendar-empty"></div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
}

export default Plantoes;
