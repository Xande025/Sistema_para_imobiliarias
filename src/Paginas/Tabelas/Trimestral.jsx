import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Trimestral.css';
import Filtro2 from './Filtro2'; // Importe o componente Filtro2

const Trimestral = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('1º Trimestre'); // Estado para controlar o trimestre selecionado

  return (
    <div className="containerr">
      <header className="fixed-headerr">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="tituloM">Planilha Trimestral</h1>
        <div className="header">
          <button className='Bnt'>
            <li><Link to="/home">Voltar para Home</Link></li>
          </button>
        </div>
      </header>

      {/* Adicione o componente de filtro de trimestres */}
      <Filtro2 selectedQuarter={selectedQuarter} setSelectedQuarter={setSelectedQuarter} />

      {/* Renderize os dados com base no trimestre selecionado */}
      {selectedQuarter === '1º Trimestre' && (
        <div className="Trimestre">
          <h1 className="titulo-trimestre">1º Trimestre (Jan - Mar)</h1>
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
            <tr className="table-row">
                <td className="table-cell">Carol</td>
                <td className="table-cellV">38</td>
                <td className="table-cellV">25</td>
                <td className="table-cellV">10</td>
                <td className="table-cellV">15</td>

              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cellV">30</td>
                <td className="table-cellV">22</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV">19</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cell">19</td>
                <td className="table-cell">11</td>
                <td className="table-cell">2</td>
                <td className="table-cell">12</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Marcio</td>
                <td className="table-cell">19</td>
                <td className="table-cell">8</td>
                <td className="table-cell">0</td>
                <td className="table-cell">0</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cellV">27</td>
                <td className="table-cell">15</td>
                <td className="table-cell">7</td>
                <td className="table-cell">8</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cellV">32</td>
                <td className="table-cellV">27</td>
                <td className="table-cellV">3</td>
                <td className="table-cellV">17</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Rafael</td>
                <td className="table-cell">3</td>
                <td className="table-cell">3</td>
                <td className="table-cell">0</td>
                <td className="table-cellV">0</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Theodoro</td>
                <td className="table-cell">16</td>
                <td className="table-cell">11</td>
                <td className="table-cell">1</td>
                <td className="table-cell">4</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">184</td>
                <td className="table-cellN">122</td>
                <td className="table-cellN">28</td>
                <td className="table-cellN">75</td>

              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedQuarter === '2º Trimestre' && (
        <div className="Trimestre">
          <h1 className="titulo-trimestre">2º Trimestre (Abr - Jun)</h1>
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
            <tr className="table-row">
                <td className="table-cell">Carol</td>
                <td className="table-cellV">32</td>
                <td className="table-cell">22</td>
                <td className="table-cell">3</td>
                <td className="table-cell">14</td>

              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cellV">27</td>
                <td className="table-cellV">18</td>
                <td className="table-cellV">0</td>
                <td className="table-cellV">16</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cell">9</td>
                <td className="table-cell">3</td>
                <td className="table-cell">2</td>
                <td className="table-cell">1</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Marcio</td>
                <td className="table-cell">8</td>
                <td className="table-cell">6</td>
                <td className="table-cell">0</td>
                <td className="table-cell">0</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cell">18</td>
                <td className="table-cell">14</td>
                <td className="table-cell">1</td>
                <td className="table-cell">5</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cellV">31</td>
                <td className="table-cellV">22</td>
                <td className="table-cellV">1</td>
                <td className="table-cellV">15</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Rafael</td>
                <td className="table-cellV">26</td>
                <td className="table-cell">13</td>
                <td className="table-cell">0</td>
                <td className="table-cell">1</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Theodoro</td>
                <td className="table-cell">10</td>
                <td className="table-cell">3</td>
                <td className="table-cell">0</td>
                <td className="table-cell">0</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">161</td>
                <td className="table-cellN">101</td>
                <td className="table-cellN">7</td>
                <td className="table-cellN">54</td>

              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedQuarter === '3º Trimestre' && (
        <div className="Trimestre">
          <h1 className="titulo-trimestre">3º Trimestre (Jul - Set)</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
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
              {/* Dados para o terceiro trimestre */}
            </tbody>
          </table>
        </div>
      )}

      {/* Adicione mais lógica para renderizar outros trimestres, se necessário */}
    </div>
  );
}

export default Trimestral;
