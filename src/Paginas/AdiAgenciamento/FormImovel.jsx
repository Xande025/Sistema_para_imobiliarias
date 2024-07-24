import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";



class Imovel {
  constructor(id, endereco, quartos, valor, foto, bairro, placa) {
    this.id = id;
    this.endereco = endereco;
    this.quartos = quartos;
    this.valor = valor;
    this.foto = foto;
    this.bairro = bairro;
    this.placa = placa;
  }
}

function FormImovel() {
  const { register, handleSubmit, setFocus, reset } = useForm();
  const [, setImovelList] = useState([]);

  function cadastraImovel(data) {
    const id = Date.now();

    const novaEntrada = new Imovel(
      id,
      data.endereco,
      parseInt(data.quartos),
      parseFloat(data.valor),
      data.foto,
      data.bairro,
      data.placa === 'sim'
    );

    const entradaExistente = JSON.parse(localStorage.getItem("imoveis")) || [];
    const entradaAtualizada = [...entradaExistente, novaEntrada];
    localStorage.setItem("imoveis", JSON.stringify(entradaAtualizada));

    setImovelList(entradaAtualizada);
    setFocus("endereco");
    toast.success("Imóvel cadastrado com sucesso!");
    reset();
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit(cadastraImovel)} className="p-4 bg-blue-50">
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="font-bold text-base">Endereço:</label>
          <input
            type="text"
            {...register("endereco", { required: true })}
            className="p-2 text-base border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold text-base">Quartos:</label>
          <input
            type="number"
            {...register("quartos", { required: true })}
            className="p-2 text-base border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold text-base">Valor:</label>
          <input
            type="number"
            step="0.01"
            {...register("valor", { required: true })}
            className="p-2 text-base border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold text-base">Foto:</label>
          <input
            type="text"
            {...register("foto", { required: true })}
            className="p-2 text-base border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold text-base">Bairro:</label>
          <select
            {...register("bairro", { required: true })}
            className="p-2 text-base border border-gray-300 rounded-md w-full"
          >
            <option value="">Selecione o Bairro</option>
            <option value="Areal">Areal</option>
            <option value="Tres Vendas">Tres Vendas</option>
            <option value="Fragata">Fragata</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="font-bold text-base">Placa:</label>
          <select
            {...register("placa", { required: true })}
            className="p-2 text-base border border-gray-300 rounded-md w-full"
          >
            <option value="">Tem Placa?</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </div>
        <div>
          <button onClick={refreshPage}
            type="submit"
            className="px-3 py-2 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-400"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormImovel;
