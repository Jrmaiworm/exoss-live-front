import React from 'react';
import formatDateToBrazil from '../utils/formatDate';
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

function Card({ item, onClick }) {
  const formattedDate = formatDateToBrazil(item?.data);

  return (
    <button
      className="bg-white border-slate-900 border-2 rounded-lg shadow-xl overflow-hidden w-56 mb-5 cursor-pointer text-left transition-transform transform hover:scale-105"
      onClick={onClick}
    >
      <img src={`data:image/jpeg;base64,${item.img}`} className="w-full h-auto" alt="Imagem capturada" />
      <div className="p-2">
        <div className="flex items-center text-gray-700 mb-1">
          <FaCalendarAlt className="mr-2 text-blue-500" />
          <p className="text-xs font-semibold">{formattedDate || 'Data não disponível'} - UTC</p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="mr-2 text-blue-500" />
          <p className="text-xs">{item.station}</p>
        </div>
      </div>
    </button>
  );
}

function Modal({ item, onClose }) {
  const formattedDate = formatDateToBrazil(item?.data);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto cursor-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 max-w-4xl h-auto p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 text-2xl text-gray-600 hover:text-gray-700 transition duration-300"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>
        <img src={`data:image/jpeg;base64,${item.img}`} className="w-full h-auto" alt="Imagem capturada" />
        <div className="p-4">
          <div className="flex items-center justify-center text-gray-700 mb-2">
            <FaCalendarAlt className="mr-2 text-blue-500" />
            <p className="text-md font-semibold ">{formattedDate || 'Data não disponível'} UTC</p>
          </div>
          <div className="flex items-center justify-center text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-blue-500" />
            <p className="text-md">{item.station}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export { Card, Modal };
