import { Box, Text, TextField, Button } from "@skynexui/components";
import React, { useState } from "react";
import appConfig from "../config.json";
import Header from "../components/header";
import { useRouter } from 'next/router';
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
          <Box
            as="form"
            onSubmit={collectData}
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
          >
            <Text>Área exclusiva para associados</Text>
            <br />
            <TextField
              id="user"
              type="text"
              name="user"
              value={login}
              onChange={(e) => {
                setLogin(e.target.value);
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
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
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

            <Button
              label="Entrar"
              type="submit"
              buttonColors={{ contrastColor: appConfig.theme.colors.neutrals["000"], mainColor: "blue" }}
              styleSheet={{
                width: "150px",
                height: "30px",
                marginTop: "20px"
              }}
            />
          </Box>
          <Link href="/">
            <Text
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                hover: {
                  cursor: "pointer",
                },
              }}
            >
              Voltar
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
