import React, { useState, useEffect } from 'react';
import { Card, Modal } from './CardModal';

function ListaCapturas() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(20);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(`http://177.70.102.109:3037/capture?page=${page}&limit=${limit}`);
        const result = await response.json();
        setData(result.results);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
      setIsLoading(false);
    }

    fetchData();

    const intervalId = setInterval(fetchData, 120000);
    
    return () => clearInterval(intervalId);
  }, [page, limit]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleRefresh = () => {
    async function fetchData() {
      try {
        const response = await fetch(`http://177.70.102.109:3037/capture?page=${page}&limit=${limit}`);
        const result = await response.json();
        setData(result.results);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }
    fetchData();
  };

  return (
    <div className="relative flex flex-col flex-1 bg-gray-700 rounded-lg items-center p-0 overflow-auto">
      <button
        onClick={handleRefresh}
        className="self-end m-2 p-2 bg-gray-800 text-white rounded hover:bg-gray-600 transition duration-300"
      >
        Atualizar
      </button>
      {isLoading ? (
        <p className="self-center mt-5">Carregando...</p>
      ) : (
        <>
          <div className="bg-gray-700 flex mb-4 overflow-auto w-full flex-wrap gap-4 justify-center">
            {data.map((item) => (
              <Card key={item.url} item={item} onClick={() => handleCardClick(item)} />
            ))}
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <button
              className="bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-300"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Anterior
            </button>
            <p className="self-center">Página {page} de {totalPages}</p>
            <button
              className="bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-300"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              Próximo
            </button>
          </div>
        </>
      )}
      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
}

export default ListaCapturas;
