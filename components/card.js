import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import axios from "axios";
import { getParametrizedRoute } from "next/dist/shared/lib/router/utils/route-regex";
import React, {useEffect, useState} from "react";
import * as cheerio from 'cheerio';

export function Card() {
 
  
 const [allsky, setAllsky] =useState("");
 

 useEffect(() => {
 function imagem() {
  setAllsky  ("http://www.allskyexossjam1.br-web.com/image-resize.jpg?_ts=1644880659459"
   
  );
 
}

setInterval(imagem, 2000)
}, [allsky]);

//   async function CarregaImagem() {
//   await axios.get('http://www.allskyexossjam1.br-web.com/')
//   .then(resp => {
//    console.log(resp.request.response)

//   })
// }

let data = new Date();
 let dia = data.getDate();
 let mes = data.getMonth();
 let ano = data.getFullYear();


return(
    <Box
    styleSheet={{
      margin: "15px",
      padding: "10px",
    
    }}
  >
    <Text> Allsky Jam1-Exoss-Cams</Text>
    <Image
    id ="root"
      alt=" 01/27/2022  00:40:52.464  spo  1330  +0.4"
      styleSheet={{
        width: "20vw",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        hover: {
          cursor: "pointer",
        },
      }}
      src={allsky}
    />
    
    <Text>{dia+"/"+mes+"/"+ano} </Text>
  </Box>

) 

}