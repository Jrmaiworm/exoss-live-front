import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import Link from "next/link";
import React from "react";
import appConfig from "../config.json";

export default function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:"#125",
          padding: "20px"
        }}
      >
        <Link  href="https://www.exoss.org">
        <Image

          styleSheet={{
            width: "10vw",
            marginBottom: "10px",
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            hover: {
              cursor: 'pointer'
            }
          }}
          // src="http://press.exoss.org/wp-content/uploads/2016/12/EXOSS-TRANSPARENTE.png"
          src="https://exoss.imo.net/imo/img/org/exo/logos/exoss.png"
        />
        </Link>
<Link  href="https://www.seti.org/cams">
<Image
         
         styleSheet={{
           width: "4vw",
           marginBottom: "10px",
           display: "flex",
           alignItems: "end",
           justifyContent: "space-between",
           hover: {
            cursor: 'pointer'
          }
         }}
         // src="http://press.exoss.org/wp-content/uploads/2016/12/EXOSS-TRANSPARENTE.png"
         src="https://www.seti.org/sites/default/files/setilogo_1.png"
        
       />
</Link>
       
<Box>
<Link   href="https://exoss.imo.net/members/imo/report_intro">
<Image
         
         styleSheet={{
           width: "4vw",
           marginBottom: "10px",
           display: "flex",
           alignItems: "center",
           justifyContent: "column",
           hover: {
            cursor: 'pointer'
          }
         }}
         // src="http://press.exoss.org/wp-content/uploads/2016/12/EXOSS-TRANSPARENTE.png"
         src="https://www.imo.net/dist/img/org/imo.png"
        
       />
       
</Link>
{/* <Text>Viu um meteoro?</Text> */}
</Box>
        {/* <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Viu um meteoro?"
          href="https://exoss.imo.net/members/imo/report_intro"
        /> */}

        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Associados"
          href="/home"
        />

      
      </Box>
    </>
  );
}
