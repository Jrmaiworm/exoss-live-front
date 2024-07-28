import { Box, Text, TextField, Button } from "@skynexui/components";
import React, { useState } from "react";
import appConfig from "../config.json";
import Header from "../components/header";
import api from "../server/api";
import Link from "next/link";

export default function Admin() {
  const [value, setValue] = React.useState("");
  const [usuario, setUsuario] = useState({
    login: "",
    password: "",
    id_estacao:""
  });
  console.log(usuario);

  async function collectData() {
    console.warn(usuario);
    await api.post("usuario/salvar", usuario);
    alert("Usuario Cadastrado com sucesso!");
  }
  console.log(usuario);

  async function deletarUsuario() {
    console.log(value);
    var response = await api.delete(`usuario/delete/${value}`);
    alert(response);
  }
  console.log();

  


  
  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundImage: `url(https://storage.googleapis.com/production-hostgator-brasil-v1-0-8/058/830058/2aXnw63K/c76167d8499e49d78fe5f66c94396bc4)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
          overflow: "auto",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
            overflow: "auto",
          }}
        >
          <Text>Cadastro de Associado</Text>
          <br></br>
          <TextField
            id="user"
            type="text"
            name="user"
            value={usuario?.login}
            onChange={(e) => {
              setUsuario({ ...usuario, login: e.target.value });
            }}
            placeholder="Login"
            styleSheet={{ width: "30%" }}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          />

          <TextField
            id="password"
            type="text"
            name="password"
            value={usuario?.password}
            onChange={(e) => {
              setUsuario({ ...usuario, password: e.target.value });
            }}
            placeholder="Senha"
            styleSheet={{ width: "30%" }}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          />

{/* <TextField
            id="id_estacao"
            type="text"
            name="id_estacao"
            value={usuario?.id_estacao}
            onChange={(e) => {
              setUsuario({ ...usuario, id_estacao: e.target.value });
            }}
            placeholder="Id estação"
            styleSheet={{ width: "30%" }}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          /> */}

          <Button
            label="Cadastrar"
            buttonColors={"blue"}
            onClick={collectData}
            styleSheet={{
              width: "150px",
              height: "30px",
            }}
          />

          {/* <TextField
            id="delete"
            type="text"
            name="delete"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="insira o id do usuario que deseja deletar"
            styleSheet={{ width: "20%" ,marginTop:"15px"}}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          />
          <Button
            styleSheet={{  width: "150px",
            height: "30px",}}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }} */}
         
            {/* type="button"
            onClick={deletarUsuario}
          >Deletar</Button> */}

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
              overflow: "auto",
            }}
          ></Box>

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "100%" },
              textAlign: "center",
              marginBottom: "32px",
              marginTop: "50px",
            }}
          ></Box>
        </Box>
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
            overflow: "auto",
          }}
        >
          <Text>Cadastro de Estacao</Text>
          <br></br>
          <TextField
            id="user"
            type="text"
            name="user"
            value={usuario?.login}
            onChange={(e) => {
              setUsuario({ ...usuario, login: e.target.value });
            }}
            placeholder="Nome associado"
            styleSheet={{ width: "50%" }}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          />

          <TextField
            id="user"
            type="text"
            name="user"
            value={usuario?.login}
            onChange={(e) => {
              setUsuario({ ...usuario, login: e.target.value });
            }}
            placeholder="Nome estacao"
            styleSheet={{ width: "50%" }}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          />

          <TextField
            id="user"
            type="text"
            name="user"
            value={usuario?.login}
            onChange={(e) => {
              setUsuario({ ...usuario, login: e.target.value });
            }}
            placeholder="FOV"
            styleSheet={{ width: "50%" }}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          />

          <TextField
            id="user"
            type="text"
            name="user"
            value={usuario?.login}
            onChange={(e) => {
              setUsuario({ ...usuario, login: e.target.value });
            }}
            placeholder="Node"
            styleSheet={{ width: "50%" }}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          />

          <TextField
            id="password"
            type="text"
            name="password"
            value={usuario?.password}
            onChange={(e) => {
              setUsuario({ ...usuario, password: e.target.value });
            }}
            placeholder="Numero CAMS"
            styleSheet={{ width: "50%" }}
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          />

          <Button
            label="Cadastrar"
            buttonColors={"blue"}
            onClick={collectData}
            styleSheet={{
              width: "150px",
              height: "30px",
            }}
          />

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
              overflow: "auto",
            }}
          ></Box>

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "100%" },
              textAlign: "center",
              marginBottom: "32px",
              marginTop: "50px",
            }}
          ></Box>

          <Link href="/">
            <Text
              styleSheet={{
                hover: {
                  cursor: "pointer",
                },
              }}
            >
              Logout
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
