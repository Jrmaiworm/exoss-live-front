"use client"
import React, { useState } from "react";
import Header from "../../components/header";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Home() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const collectData = async (event) => {
    event.preventDefault();
    console.warn(login, password);
    try {
      let result = await fetch("http://177.70.102.109:3037/user-auth", {
        method: "POST",
        body: JSON.stringify({ email: login, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();

      if (result.token) {
        localStorage.setItem("usuario", JSON.stringify(result));
        alert("Bem vindo a Exoss.");
        router.push("/admin");
      } else {
        alert("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login, tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(https://storage.googleapis.com/production-hostgator-brasil-v1-0-8/058/830058/2aXnw63K/c76167d8499e49d78fe5f66c94396bc4)`,
      }}
    >
      <div className="flex flex-col flex-1 shadow-lg rounded-lg bg-gray-800 h-full max-w-3xl p-8 overflow-auto">
        {/* <Header /> */}
        <div className="relative flex flex-1 bg-gray-700 flex-col rounded-lg p-8 overflow-auto">
          <form
            onSubmit={collectData}
            className="flex flex-col items-center justify-center w-full text-center mb-8 mt-12"
          >
            <h2 className="text-xl mb-4">Área exclusiva para associados</h2>
            <input
              id="user"
              type="text"
              name="user"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Login"
              className="w-2/3 p-2 mb-4 bg-gray-800 text-white rounded"
            />
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="w-2/3 p-2 mb-4 bg-gray-800 text-white rounded"
            />
            <button
              type="submit"
              className="w-36 h-10 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300 mt-4"
            >
              Entrar
            </button>
          </form>
          <Link href="/">
            <p className="flex flex-col items-center justify-center hover:cursor-pointer">
              Voltar
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
