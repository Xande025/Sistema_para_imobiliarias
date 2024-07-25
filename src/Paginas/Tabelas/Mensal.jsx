import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Mensal.css';
import Filtro from './Filtro';


const Mensal = () => {
  const [selectedMonth, setSelectedMonth] = useState('Janeiro');

  const sumAge = () => {
    let total = 0;
    const tableRows = document.querySelectorAll(`.${selectedMonth} .table-row`);
    tableRows.forEach(row => {
      const ageValue = parseInt(row.querySelector('.table-cell:nth-child(2)').textContent);
      total += ageValue;
    });
    return total;
  };

  return (
    <div className="containerr">
      <header className="fixed-headerr">
        <img src="/logo.png" alt="Logo" className="logoM" />
        <h1 className="tituloM">Planilha Mensal</h1>
        <div className="header">
          <button className='Bnt'>
            <li><Link to="/home">Voltar para Home</Link></li>
          </button>
        </div>
      </header>
      <Filtro selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />

      {selectedMonth === 'Janeiro' && (
        <div className="Janeiro">
          <h1 className="mes1">Janeiro</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell ">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell table-cell-hide">Placa</th>
                <th className="table-cell">Placa P</th>
                <th className="table-cell table-cell-hide">% Dos Ages</th>
                <th className="table-cell table-cell-hide">% Das Placas P</th>
                <th className="table-cell">% Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell ">Carol</td>
                <td className="table-cellV">13</td>
                <td className="table-cellV">10</td>
                <td className="table-cellV table-cell-hide">3</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">162.5%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV">131.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cellV">8</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">3</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV">100%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cell">3</td>
                <td className="table-cell">2</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">2</td>
                <td className="table-cell table-cell-hide">37.5%</td>
                <td className="table-cell table-cell-hide">40%</td>
                <td className="table-cell">38,75%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cell">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">0%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cellV">10</td>
                <td className="table-cellV">7</td>
                <td className="table-cellV table-cell-hide">2</td>
                <td className="table-cellV">6</td>
                <td className="table-cellV table-cell-hide">125%</td>
                <td className="table-cellV table-cell-hide">120%</td>
                <td className="table-cellV">122,5%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">34</td>
                <td className="table-cellN">24</td>
                <td className="table-cellN table-cell-hide">8</td>
                <td className="table-cellN">18</td>
                <td className="table-cellN table-cell-hide">85%</td>
                <td className="table-cellN table-cell-hide">72%</td>
                <td className="table-cellN">78.50%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedMonth === 'Fevereiro' && (
        <div className="Fevereiro">
          <h1 className="mes2">Fevereiro</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell table-cell-hide">Placa</th>
                <th className="table-cell ">Placa P</th>
                <th className="table-cell table-cell-hide">% Dos Ages</th>
                <th className="table-cell table-cell-hide">% Das Placas P</th>
                <th className="table-cell">% Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell">Carol</td>
                <td className="table-cellV">15</td>
                <td className="table-cellV">9</td>
                <td className="table-cellV table-cell-hide">3</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">187.5%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV">143.75%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cellV">13</td>
                <td className="table-cellV">10</td>
                <td className="table-cellV table-cell-hide">1</td>
                <td className="table-cellV">8</td>
                <td className="table-cellV table-cell-hide">162.50%</td>
                <td className="table-cellV table-cell-hide">160%</td>
                <td className="table-cellV">161.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cellV">9</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">1</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">112.50%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV">106.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cellV">21</td>
                <td className="table-cellV">13</td>
                <td className="table-cellV table-cell-hide">6</td>
                <td className="table-cellV">6</td>
                <td className="table-cellV table-cell-hide">262.5%</td>
                <td className="table-cellV table-cell-hide">120%</td>
                <td className="table-cellV">191.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cellV">17</td>
                <td className="table-cellV">16</td>
                <td className="table-cellV table-cell-hide">0</td>
                <td className="table-cellV">7</td>
                <td className="table-cellV table-cell-hide">212.5%</td>
                <td className="table-cellV table-cell-hide">140%</td>
                <td className="table-cellV">176.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Theodoro</td>
                <td className="table-cell">7</td>
                <td className="table-cell">5</td>
                <td className="table-cell table-cell-hide">1</td>
                <td className="table-cell">4</td>
                <td className="table-cell table-cell-hide">87.5%</td>
                <td className="table-cell table-cell-hide">50%</td>
                <td className="table-cell">68.75%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">82</td>
                <td className="table-cellN">58</td>
                <td className="table-cellN table-cell-hide">12</td>
                <td className="table-cellN">35</td>
                <td className="table-cellN table-cell-hide">170,83%</td>
                <td className="table-cellN table-cell-hide">111,67%</td>
                <td className="table-cellN">142,92%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedMonth === 'Março' && (
        <div className="Março">
          <h1 className="mes2">Março</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell table-cell-hide">Placa</th>
                <th className="table-cell ">Placa P</th>
                <th className="table-cell table-cell-hide">% Dos Ages</th>
                <th className="table-cell table-cell-hide">% Das Placas P</th>
                <th className="table-cell">% Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell">Carol</td>
                <td className="table-cellV">12</td>
                <td className="table-cellV">6</td>
                <td className="table-cellV table-cell-hide">4</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">150%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV">125%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cellV">9</td>
                <td className="table-cellV">7</td>
                <td className="table-cellV table-cell-hide">1</td>
                <td className="table-cellV">6</td>
                <td className="table-cellV table-cell-hide">112.5%</td>
                <td className="table-cellV table-cell-hide">120%</td>
                <td className="table-cellV">125%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cell">7</td>
                <td className="table-cell">4</td>
                <td className="table-cell table-cell-hide">1</td>
                <td className="table-cellV">5</td>
                <td className="table-cell table-cell-hide">87.5%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cell">93.75%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Marcio</td>
                <td className="table-cellV">19</td>
                <td className="table-cell">8</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cellV table-cell-hide">237.5%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">50%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cell">6</td>
                <td className="table-cell">2</td>
                <td className="table-cell table-cell-hide">1</td>
                <td className="table-cell">2</td>
                <td className="table-cell table-cell-hide">75%</td>
                <td className="table-cell table-cell-hide">40%</td>
                <td className="table-cell">57.5%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cell">5</td>
                <td className="table-cell">4</td>
                <td className="table-cell table-cell-hide">1</td>
                <td className="table-cell">4</td>
                <td className="table-cell table-cell-hide">62.5%</td>
                <td className="table-cell table-cell-hide">80%</td>
                <td className="table-cell">71.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Rafael</td>
                <td className="table-cell">3</td>
                <td className="table-cell">3</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">37.5%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">12.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Theodoro</td>
                <td className="table-cellV">9</td>
                <td className="table-cell">6</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cellV table-cell-hide">112.5%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">50%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">70</td>
                <td className="table-cellN">40</td>
                <td className="table-cellN table-cell-hide">8</td>
                <td className="table-cellN">22</td>
                <td className="table-cellN table-cell-hide">109.37%</td>
                <td className="table-cellN table-cell-hide">55%</td>
                <td className="table-cellN">72.03%%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedMonth === 'Abril' && (
        <div className="Abril">
          <h1 className="mes2">Abril</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell table-cell-hide">Placa</th>
                <th className="table-cell">Placa P</th>
                <th className="table-cell table-cell-hide">% Dos Ages</th>
                <th className="table-cell table-cell-hide">% Das Placas P</th>
                <th className="table-cell">% Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell">Carol</td>
                <td className="table-cellV">16</td>
                <td className="table-cellV">9</td>
                <td className="table-cellV table-cell-hide">3</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">200%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV">150%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cellV">9</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">0</td>
                <td className="table-cellV">7</td>
                <td className="table-cellV table-cell-hide">112.5%</td>
                <td className="table-cellV table-cell-hide">140%</td>
                <td className="table-cellV">126.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cell">6</td>
                <td className="table-cell">3</td>
                <td className="table-cell table-cell-hide">2</td>
                <td className="table-cell">1</td>
                <td className="table-cell table-cell-hide">75%</td>
                <td className="table-cell table-cell-hide">20%</td>
                <td className="table-cell">47.5%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Marcio</td>
                <td className="table-cell">4</td>
                <td className="table-cell">3</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">50%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cell">7</td>
                <td className="table-cell">4</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">1</td>
                <td className="table-cell table-cell-hide">75%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">37.5%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cellV">15</td>
                <td className="table-cell">8</td>
                <td className="table-cell table-cell-hide">1</td>
                <td className="table-cell">3</td>
                <td className="table-cellV table-cell-hide">187.5%</td>
                <td className="table-cell table-cell-hide">37.5%</td>
                <td className="table-cell">68.75%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Rafael</td>
                <td className="table-cellV">14</td>
                <td className="table-cell">6</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cellV table-cell-hide">162.5%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">50%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Theodoro</td>
                <td className="table-cellV">10</td>
                <td className="table-cell">3</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cellV table-cell-hide">125%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">50%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">81</td>
                <td className="table-cellN">41</td>
                <td className="table-cellN table-cell-hide">6</td>
                <td className="table-cellN">17</td>
                <td className="table-cellN table-cell-hide">123.44%%</td>
                <td className="table-cellN table-cell-hide">37.19%</td>
                <td className="table-cellN">69.38%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {selectedMonth === 'Maio' && (
        <div className="Maio">
          <h1 className="mes2">Maio</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell table-cell-hide">Placa</th>
                <th className="table-cell">Placa P</th>
                <th className="table-cell table-cell-hide">% Dos Ages</th>
                <th className="table-cell table-cell-hide">% Das Placas P</th>
                <th className="table-cell">% Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell">Carol</td>
                <td className="table-cellV">8</td>
                <td className="table-cell">7</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">3</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cell table-cell-hide">60%</td>
                <td className="table-cell">80%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cell">2</td>
                <td className="table-cell">1</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">1</td>
                <td className="table-cell table-cell-hide">25%</td>
                <td className="table-cell table-cell-hide">20%</td>
                <td className="table-cell">22.5%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cell">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">0%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Marcio</td>
                <td className="table-cell">1</td>
                <td className="table-cell">1</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">12.5%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">6.25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cell">4</td>
                <td className="table-cell">4</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">50%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cell">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">0%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Rafael</td>
                <td className="table-cell">4</td>
                <td className="table-cell">2</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">50%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Theodoro</td>
                <td className="table-cell">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">0%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">19</td>
                <td className="table-cellN">15</td>
                <td className="table-cellN table-cell-hide">0</td>
                <td className="table-cellN">4</td>
                <td className="table-cellN table-cell-hide">21.59%%</td>
                <td className="table-cellN table-cell-hide">7.27%</td>
                <td className="table-cellN">14.43%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
        {selectedMonth === 'Junho' && (
        <div className="Junho">
          <h1 className="mes2">Junho</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell table-cell-hide">Placa</th>
                <th className="table-cell">Placa P</th>
                <th className="table-cell table-cell-hide">% Dos Ages</th>
                <th className="table-cell table-cell-hide">% Das Placas P</th>
                <th className="table-cell">% Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell">Carol</td>
                <td className="table-cellV">8</td>
                <td className="table-cellV">6</td>
                <td className="table-cellV table-cell-hide">0</td>
                <td className="table-cellV">6</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV table-cell-hide">120%</td>
                <td className="table-cellV">110%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cellV">16</td>
                <td className="table-cellV">12</td>
                <td className="table-cellV table-cell-hide">0</td>
                <td className="table-cellV">8</td>
                <td className="table-cellV table-cell-hide">200%</td>
                <td className="table-cellV table-cell-hide">160%</td>
                <td className="table-cellV">180%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cell">3</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">37.5%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">18.5%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Marcio</td>
                <td className="table-cell">3</td>
                <td className="table-cell">2</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">2</td>
                <td className="table-cell table-cell-hide">37.5%</td>
                <td className="table-cell table-cell-hide">40%</td>
                <td className="table-cell">38.75%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cell">7</td>
                <td className="table-cell">6</td>
                <td className="table-cell table-cell-hide">1</td>
                <td className="table-cell">4</td>
                <td className="table-cell table-cell-hide">87.5%</td>
                <td className="table-cell table-cell-hide">80%</td>
                <td className="table-cell">95.31%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cellV">16</td>
                <td className="table-cellV">14</td>
                <td className="table-cellV table-cell-hide">0</td>
                <td className="table-cellV">12</td>
                <td className="table-cellV table-cell-hide">200%</td>
                <td className="table-cellV table-cell-hide" >240%</td>
                <td className="table-cellV">220%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Rafael</td>
                <td className="table-cellV">8</td>
                <td className="table-cell">5</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">1</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cell table-cell-hide">20%</td>
                <td className="table-cell">60%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Theodoro</td>
                <td className="table-cell">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">0%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">61</td>
                <td className="table-cellN">45</td>
                <td className="table-cellN table-cell-hide">1</td>
                <td className="table-cellN">33</td>
                <td className="table-cellN table-cell-hide">95.31%</td>
                <td className="table-cellN table-cell-hide">82.5%</td>
                <td className="table-cellN">90.48%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {selectedMonth === 'Julho' && (
        <div className="Julho">
          <h1 className="mes2">Julho</h1>
          <table className="table">
            <thead>
              <tr className="table-header">
                <th className="table-cell">Corretor</th>
                <th className="table-cell">Age</th>
                <th className="table-cell">Personas</th>
                <th className="table-cell table-cell-hide">Placa</th>
                <th className="table-cell">Placa P</th>
                <th className="table-cell table-cell-hide">% Dos Ages</th>
                <th className="table-cell table-cell-hide">% Das Placas P</th>
                <th className="table-cell">% Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell">Carol</td>
                <td className="table-cellV">8</td>
                <td className="table-cellV">7</td>
                <td className="table-cellV table-cell-hide">1</td>
                <td className="table-cellV">7</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV table-cell-hide">140%</td>
                <td className="table-cellV">120%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Claudio</td>
                <td className="table-cellV">11</td>
                <td className="table-cellV">6</td>
                <td className="table-cellV table-cell-hide">2</td>
                <td className="table-cellV">7</td>
                <td className="table-cellV table-cell-hide">137.5%</td>
                <td className="table-cellV table-cell-hide">140%</td>
                <td className="table-cellV">138.75%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Illie</td>
                <td className="table-cell">4</td>
                <td className="table-cell">1</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">0</td>
                <td className="table-cell table-cell-hide">50%</td>
                <td className="table-cell table-cell-hide">0%</td>
                <td className="table-cell">25%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Marcio</td>
                <td className="table-cellV">16</td>
                <td className="table-cell">11</td>
                <td className="table-cell table-cell-hide">14</td>
                <td className="table-cell">4</td>
                <td className="table-cellV table-cell-hide">200%</td>
                <td className="table-cell table-cell-hide">80%</td>
                <td className="table-cell">90%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Martini</td>
                <td className="table-cellV">18</td>
                <td className="table-cell">12</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cell">1</td>
                <td className="table-cellV table-cell-hide">225%</td>
                <td className="table-cell table-cell-hide">20%</td>
                <td className="table-cell">60%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Neto</td>
                <td className="table-cell">7</td>
                <td className="table-cell">6</td>
                <td className="table-cell table-cell-hide">0</td>
                <td className="table-cellV">5</td>
                <td className="table-cell table-cell-hide">87.5%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cell">93.75%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Rafael</td>
                <td className="table-cellV">13</td>
                <td className="table-cell">5</td>
                <td className="table-cell table-cell-hide">1</td>
                <td className="table-cell">2</td>
                <td className="table-cellV table-cell-hide">162.5%</td>
                <td className="table-cell table-cell-hide">40%</td>
                <td className="table-cell">70%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">Theodoro</td>
                <td className="table-cellV">8</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">3</td>
                <td className="table-cellV">5</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV table-cell-hide">100%</td>
                <td className="table-cellV">100%</td>
              </tr>
              <tr className="table-row">
                <td className="table-cellN">Total</td>
                <td className="table-cellN">61</td>
                <td className="table-cellN">45</td>
                <td className="table-cellN table-cell-hide">1</td>
                <td className="table-cellN">33</td>
                <td className="table-cellN table-cell-hide">95.31%</td>
                <td className="table-cellN table-cell-hide">82.5%</td>
                <td className="table-cellN">90.48%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
        {selectedMonth !== 'Janeiro' && selectedMonth !== 'Fevereiro' && selectedMonth !== 'Março' && selectedMonth !== 'Abril' && selectedMonth !== 'Maio' && selectedMonth !== 'Junho' && selectedMonth !== 'Julho' &&(
        <div className="no-data">
          <h1>Dados não disponíveis para o mês de {selectedMonth}</h1>
        </div>
      )}
    </div>
  );
};

export default Mensal;
