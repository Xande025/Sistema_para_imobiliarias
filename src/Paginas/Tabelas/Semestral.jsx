// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Trimestral.css';
import Filtro3 from './Filtro3'; // Importe o componente Filtro3

const Semestral = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('1º Semestre'); // Estado para controlar o semestre selecionado

  return (
    <div className="containerr">
      <header className="fixed-headerr">
        <img src="/novalogo2.png" alt="Logo" className="logo" />
        <h1 className="tituloM">Planilha Semestral</h1>
        <div className="header">
          <button className='Bnt'>
            <li><Link to="/home">Voltar para Home</Link></li>
          </button>
        </div>
      </header>

      {/* Adicione o componente de filtro de semestres */}
      <Filtro3 selectedQuarter={selectedQuarter} setSelectedQuarter={setSelectedQuarter} />

      {/* Renderize os dados com base no semestre selecionado */}
      {selectedQuarter === '1º Semestre' && (
        <div className="Trimestre">
          <h1 className="titulo-trimestre">1º Semestre (Jan - Jun)</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell">Placa</th>
                <th className="table-cell">Placa P</th>
              </tr>
            </thead>
            <tbody>
              {/* Dados do 1º semestre */}
            </tbody>
          </table>
        </div>
      )}

      {selectedQuarter === '2º Semestre' && (
        <div className="Trimestre">
          <h1 className="titulo-trimestre">2º Semestre (Jul - Dez)</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell">Placa</th>
                <th className="table-cell">Placa P</th>
              </tr>
            </thead>
            <tbody>
              {/* Dados do 2º semestre */}
            </tbody>
          </table>
        </div>
      )}

      {selectedQuarter === '3º Semestre' && (
        <div className="Trimestre">
          <h1 className="titulo-trimestre">3º Semestre (Jan - Jun)</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</ th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell">Placa</th>
                <th className="table-cell">Placa P</th>
                <th className="table-cell">% Dos Ages</th>
                <th className="table-cell">% Das Placas P</th>
                <th className="table-cell">% Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Dados do 3º semestre */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Semestral;