import axios from "axios";
import React, { useEffect, useState } from "react";
import * as cheerio from 'cheerio';

export function Card() {
  const [allsky, setAllsky] = useState("");

  useEffect(() => {
    function imagem() {
      setAllsky("http://www.allskyexossjam1.br-web.com/image-resize.jpg?_ts=1644880659459");
    }

    const intervalId = setInterval(imagem, 2000);
    return () => clearInterval(intervalId);
  }, [allsky]);

  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth() + 1; // Ajustando o mês, já que em JavaScript os meses vão de 0 a 11
  let ano = data.getFullYear();

  return (
    <div className="m-4 p-4 border rounded shadow-md bg-white">
      <h1 className="text-lg font-bold mb-4">Allsky Jam1-Exoss-Cams</h1>
      <img
        id="root"
        alt="Allsky Image"
        className="w-1/5 mb-4 mx-auto"
        src={allsky}
      />
      <p className="text-center">{`${dia}/${mes}/${ano}`}</p>
    </div>
  );
}
