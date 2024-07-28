import React, { useEffect, useState } from "react";

export default function Captura() {
  const [captura, setCaptura] = useState("http://www.allskyexossjam1.br-web.com/image-resize.jpg");

  // Se quiser usar o efeito de atualização a cada 1 segundo, descomente o código abaixo
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCaptura("http://www.allskyexossjam1.br-web.com/image-resize.jpg");
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <img src={captura} alt="Imagem Capturada" className="max-w-full max-h-full" />
    </div>
  );
}
