"use client";
import Header from '@/components/header';
import Relogio from '@/components/relogio';
import ListaCapturas from '@/components/listaCapturas';
import ListaEstacoes from '@/components/listaEstacoes';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push('/');
  };

  return (
    <>
      <div
        className="flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gray-900 text-white min-h-screen"
        style={{
          backgroundImage: `url(https://storage.googleapis.com/production-hostgator-brasil-v1-0-8/058/830058/2aXnw63K/c76167d8499e49d78fe5f66c94396bc4)`,
        }}
      >
        <div className="flex flex-col shadow-lg rounded-lg bg-gray-700 h-full">
          <Header />
          <Relogio />
          <div className="flex flex-col md:flex-row w-full ">
            <div className="flex-col w-1/5 p-4">
              <ListaEstacoes />
            </div>
            <div className="w-full md:w-4/5 p-4">
              <ListaCapturas />
            </div>
            
          </div>
        </div>
      </div>
      <button
        onClick={handleNavigateHome}
        className="fixed bottom-4 right-4 bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        ↑
      </button>
    </>
  );
}
