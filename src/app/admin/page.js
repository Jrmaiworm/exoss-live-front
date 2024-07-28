"use client"
import React, { useState } from "react";
import Link from "next/link";
import api from "@/server/api";
import Header from "@/components/header";

export default function Admin() {
  const [value, setValue] = useState("");
  const [usuario, setUsuario] = useState({
    login: "",
    password: "",
    id_estacao:""
  });

  async function collectData() {
    await api.post("usuario/salvar", usuario);
    alert("Usuário cadastrado com sucesso!");
  }

  async function deletarUsuario() {
    var response = await api.delete(`usuario/delete/${value}`);
    alert(response);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(https://storage.googleapis.com/production-hostgator-brasil-v1-0-8/058/830058/2aXnw63K/c76167d8499e49d78fe5f66c94396bc4)`,
      }}
    >
      <div className="flex flex-col flex-1 shadow-lg rounded-lg bg-gray-800 h-full max-w-5xl p-8 overflow-auto">
        <Header />
        <div className="relative flex flex-1 bg-gray-700 flex-col rounded-lg p-8 overflow-auto">
          <h2 className="text-2xl mb-4">Cadastro de Associado</h2>
          <input
            id="user"
            type="text"
            name="user"
            value={usuario?.login}
            onChange={(e) => setUsuario({ ...usuario, login: e.target.value })}
            placeholder="Login"
            className="w-1/3 p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <input
            id="password"
            type="password"
            name="password"
            value={usuario?.password}
            onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
            placeholder="Senha"
            className="w-1/3 p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <button
            onClick={collectData}
            className="w-36 h-10 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
          >
            Cadastrar
          </button>
        </div>
        <div className="relative flex flex-1 bg-gray-700 flex-col rounded-lg p-8 overflow-auto mt-8">
          <h2 className="text-2xl mb-4">Cadastro de Estação</h2>
          <input
            id="nomeAssociado"
            type="text"
            name="nomeAssociado"
            placeholder="Nome associado"
            className="w-1/2 p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <input
            id="nomeEstacao"
            type="text"
            name="nomeEstacao"
            placeholder="Nome estação"
            className="w-1/2 p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <input
            id="fov"
            type="text"
            name="fov"
            placeholder="FOV"
            className="w-1/2 p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <input
            id="node"
            type="text"
            name="node"
            placeholder="Node"
            className="w-1/2 p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <input
            id="numeroCams"
            type="text"
            name="numeroCams"
            placeholder="Numero CAMS"
            className="w-1/2 p-2 mb-4 bg-gray-800 text-white rounded"
          />
          <button
            onClick={collectData}
            className="w-36 h-10 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
          >
            Cadastrar
          </button>
          <Link href="/">
            <p className="mt-4 hover:cursor-pointer">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
