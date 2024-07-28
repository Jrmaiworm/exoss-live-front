import React from 'react';
import formatDateToBrazil from '../utils/formatDate';

function Card({ item, onClick }) {
  const formattedDate = formatDateToBrazil(item?.data);

  return (
    <button
      className="bg-white rounded-lg shadow-lg overflow-hidden w-72 mb-5 cursor-pointer text-left"
      onClick={onClick}
    >
      <img src={`data:image/jpeg;base64,${item.img}`} className="w-full h-auto" alt="imagem" />
      <p className="text-sm text-center m-2 text-gray-800 flex-wrap break-words overflow-auto">{item.text}</p>
      <div className="p-5">
        <p className="text-xs my-2 text-gray-700">Capturado em: {formattedDate || 'Data não disponível'}</p>
        <p className="text-xs my-2 text-gray-700">Estação: {item.station}</p>
      </div>
    </button>
  );
}

function Modal({ item, onClose }) {
  const formattedDate = formatDateToBrazil(item?.data);

  return (
    <button
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto cursor-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 max-w-4xl h-auto p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-1 cursor-pointer text-2xl text-black"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <img src={`data:image/jpeg;base64,${item.img}`} className="w-full h-auto" alt="imagem" />
        <p className="text-lg text-center my-4 text-gray-800 break-words">{item.text}</p>
        <div className="p-5">
          <p className="text-xs my-2 text-gray-700">Capturado em: {formattedDate || 'Data não disponível'}</p>
          <p className="text-xs my-2 text-gray-700">Estação: {item?.station}</p>
        </div>
      </div>
    </button>
  );
}

export { Card, Modal };
