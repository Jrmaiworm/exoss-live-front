import React, { useState, useEffect } from 'react';

function ListaEstacoes() {
  const [estacoes, setEstacoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEstacoes() {
      setIsLoading(true);
      try {
        const response = await fetch('http://177.70.102.109:3037/estacoes');
        const result = await response.json();
        setEstacoes(result);
      } catch (error) {
        console.error('Erro ao buscar as estações:', error);
      }
      setIsLoading(false);
    }

    fetchEstacoes();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 text-white">Estações</h2>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul className="flex flex-row md:flex-col md:flex-wrap md:gap-4">
          {estacoes.map((estacao, index) => (
            <li key={index} className="bg-white rounded shadow-lg md:flex md:flex-col md:items-start md:justify-start px-2">
              <p className="font-semibold text-gray-950">{estacao.nome_estacao}</p>
              <p className="text-sm text-gray-700">Associado: {estacao.nome_associado}</p>
              <p className="text-sm text-gray-700">Node: {estacao.node}</p>
              <p className="text-sm text-gray-700">Inclinação: {estacao.inclinacao}</p>
              <p className="text-sm text-gray-700">Azimute: {estacao.azimute}</p>
              <p className="text-sm text-gray-700">Lat: {estacao.latitude}</p>
              <p className="text-sm text-gray-700">Long: {estacao.longitude}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaEstacoes;
