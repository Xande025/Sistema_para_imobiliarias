//ListaImoveis

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'sonner';



function ListaImoveis({ imoveis }) {
  const [imoveisFiltrados, setImoveisFiltrados] = useState([]);

  useEffect(() => {
    setImoveisFiltrados(imoveis);
  }, [imoveis]);

  function removerAgenciamento(id) {
    let listaImoveis = JSON.parse(localStorage.getItem('imoveis')) || [];
    listaImoveis = listaImoveis.filter(imovel => imovel.id !== id);
    localStorage.setItem('imoveis', JSON.stringify(listaImoveis));
    setImoveisFiltrados(listaImoveis);
    toast.success('Imóvel removido com sucesso');
  }

  function formatarDinheiro(valor) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formatter.format(valor);
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 bg-gray-200">
        {imoveisFiltrados.map((imovel) => (
          <div key={imovel.id} className="bg-white border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-around">
            <img src={imovel.foto} alt="imovel" className="w-48 h-64 object-cover mb-4 rounded" />
            <div className="text-center flex flex-col items-center w-full">
              <h3 className="text-lg font-bold max-w-full truncate">{imovel.endereco}</h3>
              <p className="text-sm text-gray-700 mb-2 max-w-full truncate-2-lines">
                {imovel.bairro}
              </p>
              <h2 className="text-xl font-bold text-green-600 mb-2">{formatarDinheiro(imovel.valor)}</h2>
              <div className="flex items-center justify-between w-full">
                <h2 className="text-sm font-semibold">Quartos: {imovel.quartos}</h2>
                <button
                  onClick={() => removerAgenciamento(imovel.id)}
                  className="px-3 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
                >
                  Inativar Imóvel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

ListaImoveis.propTypes = {
  imoveis: PropTypes.array.isRequired,
};

export default ListaImoveis;
