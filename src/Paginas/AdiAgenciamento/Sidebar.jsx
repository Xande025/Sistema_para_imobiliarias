//Sidebar.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';



function Sidebar({ imoveis, onFiltrar, onOrdenar }) {
  const [bairro, setBairro] = useState('');
  const [placa, setPlaca] = useState('');

  const handleFiltrar = () => {
    let filtrados = [...imoveis];

    if (bairro) {
      filtrados = filtrados.filter(imovel => imovel.bairro === bairro);
    }

    if (placa) {
      const placaBool = placa === 'sim';
      filtrados = filtrados.filter(imovel => imovel.placa === placaBool);
    }

    onFiltrar(filtrados);
  };

  const handleOrdenar = (criterio) => {
    onOrdenar(criterio);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Filtros</h3>
      <div className="mb-4">
        <label className="font-bold text-base">Bairro:</label>
        <select value={bairro} onChange={(e) => setBairro(e.target.value)} className="p-2 text-base border border-gray-300 rounded-md w-full">
          <option value="">Selecione o Bairro</option>
          <option value="Areal">Areal</option>
          <option value="Tres Vendas">Tres Vendas</option>
          <option value="Fragata">Fragata</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="font-bold text-base">Placa:</label>
        <select value={placa} onChange={(e) => setPlaca(e.target.value)} className="p-2 text-base border border-gray-300 rounded-md w-full">
          <option value="">Tem Placa?</option>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
      </div>
      <button onClick={handleFiltrar} className="px-3 py-2 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-300 mb-4">Aplicar Filtros</button>
      <h3 className="text-lg font-bold mb-2">Ordenar por Preço</h3>
      <button onClick={() => handleOrdenar('maior-para-menor')} className="px-3 py-2 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-300 mb-2">Maior para Menor</button>
      <button onClick={() => handleOrdenar('menor-para-maior')} className="px-3 py-2 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-300">Menor para Maior</button>
    </div>
  );
}

Sidebar.propTypes = {
  imoveis: PropTypes.array.isRequired,
  onFiltrar: PropTypes.func.isRequired,
  onOrdenar: PropTypes.func.isRequired,
};

export default Sidebar;
