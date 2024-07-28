import appConfig from "../config.json";
import { Box, Text, Button } from "@skynexui/components";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/header";
import Relogio from "../components/relogio";

function Title(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["999"]};
        }
      `}</style>
    </>
  );
}

function extractDateFromUrl(url) {
  if (!url) {
    console.error('URL está indefinido');
    return 'Data não encontrada';
  }

  const regex = /CapturedFiles[\\\/](\d{4}_\d{2}_\d{2}_\d{6})/;
  const match = url.match(regex);
  if (match) {
    const dateString = match[1];
    const year = dateString.slice(0, 4);
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);
    const hour = dateString.slice(11, 13);
    const minute = dateString.slice(13, 15);
    const second = dateString.slice(15, 17);
    return new Date(Date.UTC(year, month - 1, day, hour, minute, second)).toLocaleString('pt-BR', { timeZone: 'UTC' });
  }
  return 'Data não encontrada';
}

function Card({ item, onClick }) {
  const extractedDate = extractDateFromUrl(item.url);
  const date = new Date(item.created_at);
  const formattedDate = date.toLocaleString('pt-BR', { timeZone: 'UTC' });

  return (
    <Box
      className="card"
      onClick={onClick}
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width: "300px",
        marginBottom: "20px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <img src={`data:image/jpeg;base64,${item.img}`} style={{ width: '100%', height: 'auto' }} />
      <Text className="card-name" style={{
        fontSize: "10px",
        textAlign: "center",
        margin: "2px 2px",
        color: appConfig.theme.colors.neutrals["800"]
      }}>{item.text}</Text>
      <Box className="card-content" style={{ padding: "5px" }}>
        <Text style={{ margin: "5px 0", fontSize: "12px", color: appConfig.theme.colors.neutrals["700"] }}>Capturado meteoro em: {extractedDate} UTC</Text>
        <Text style={{ margin: "5px 0", fontSize: "12px", color: appConfig.theme.colors.neutrals["700"] }}>Estação: {item.station}</Text>
      </Box>
    </Box>
  );
}

function Modal({ item, onClose }) {
  const extractedDate = extractDateFromUrl(item.url);
  const date = new Date(item.created_at);
  const formattedDate = date.toLocaleString('pt-BR', { timeZone: 'UTC' });

  return (
    <Box
      className="modal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto"
      }}
      onClick={onClose}
    >
      <Box
        className="modal-content"
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          width: "80%",
          maxHeight: "90vh",
          padding: "20px",
          position: "relative",
          overflowY: "auto"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "5px",
            cursor: "pointer",
            fontSize: "24px",
          }}
          onClick={onClose}
        >
          &times;
        </span>
        <img src={`data:image/jpeg;base64,${item.img}`} style={{ width: '100%', height: '80vh' }} />
        <Text className="card-name" style={{
          fontSize: "20px",
          textAlign: "center",
          margin: "10px 0",
          color: appConfig.theme.colors.neutrals["800"]
        }}>{item.text}</Text>
        <Box className="card-content" style={{ padding: "5px" }}>
          <Text style={{ margin: "10px 0", fontSize: "16px", color: appConfig.theme.colors.neutrals["700"] }}>Capturado meteoro em: {extractedDate} UTC</Text>
          <Text style={{ margin: "10px 0", fontSize: "16px", color: appConfig.theme.colors.neutrals["700"] }}>Estação: {item.station}</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default function PaginaInicial() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const roteamento = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://177.70.102.109:3037/capture');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }

    fetchData();

    const intervalId = setInterval(fetchData, 120000); // Atualiza a cada 2 minutos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleRefresh = () => {
    async function fetchData() {
      try {
        const response = await fetch('http://177.70.102.109:3037/capture');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }
    fetchData();
  };

  return (
    <>
      <Box
        style={{
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
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            borderRadius: "5px",
            backgroundColor: appConfig.theme.colors.neutrals[700],
            height: "100%",
            maxWidth: "98%",
            maxHeight: "95vh",
            padding: "0px",
            overflow: "auto",
          }}
        >
          <Header />
          <Relogio />
          <Button
            label="Atualizar"
            onClick={handleRefresh}
            style={{
              margin: "10px",
              alignSelf: "flex-end",     
              backgroundColor: "#333333",
              color: appConfig.theme.colors.neutrals["000"],
            }}
          />
          <Box
            style={{
              position: "relative",
              display: "flex",
              flex: 1,
              backgroundColor: appConfig.theme.colors.neutrals[700],
              flexDirection: "column",
              borderRadius: "5px",
              alignItems: "center",
              padding: "0px",
              overflow: "auto",
            }}
          >
            <Box
              style={{
                backgroundColor: appConfig.theme.colors.neutrals[700],
                display: "flex",
                marginBottom: "15px",
                overflow: "auto",
                width: '100%',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: "center",
              }}
            >
              {data.map((item) => (
                <Card
                  key={item.url}
                  item={item}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </>
  );
}
