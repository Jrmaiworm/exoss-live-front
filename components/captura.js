import { Box } from "@skynexui/components";
import React, { useEffect, useState } from "react";

export default function Captura() {
  const [captura, setCaptura] = useState("http://www.allskyexossjam1.br-web.com/image-resize.jpg");
//   useEffect(() => {
//     const timer = setInterval(() => {
      
//       setCaptura({
//         imagem: "http://www.allskyexossjam1.br-web.com/image-resize.jpg"
        
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
  return (
    
      <Box>
          <Image
       src= {`${captura}`} />
      </Box>
   
  );
}
