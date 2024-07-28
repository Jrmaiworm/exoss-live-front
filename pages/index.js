import React, { useState, useEffect } from 'react';
import formatDateToBrazil from '../utils/formatDate';
import appConfig from "../config.json";
import { Box, Text, Button } from "@skynexui/components";
import { useRouter } from "next/router";
import Header from "../components/header";
import Relogio from "../components/relogio";

function Card({ item, onClick }) {
  const formattedDate = formatDateToBrazil(item?.data);

  return (
    <Box
      className="card"
      onClick={onClick}
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width: "280px",
        marginBottom: "20px",
        margin: "5px",
        cursor: "pointer",
      }}
    >
      <img src={`data:image/jpeg;base64,${item.img}`} style={{ width: '100%', height: 'auto' }} alt="imagem" />
      <Text className="card-name" style={{
        fontSize: "10px",
        textAlign: "center",
        margin: "2px 2px",
        color: appConfig.theme.colors.neutrals["800"]
      }}>{item.text}</Text>
      <Box className="card-content" style={{ padding: "5px" }}>
        <Text style={{ margin: "10px 0", fontSize: "12px", color: appConfig.theme.colors.neutrals["700"] }}>Capturado em: {formattedDate || 'Data não disponível'}</Text>
        <Text style={{ margin: "5px 0", fontSize: "12px", color: appConfig.theme.colors.neutrals["700"] }}>Estação: {item.station}</Text>
      </Box>
    </Box>
  );
}

function Modal({ item, onClose }) {
  const formattedDate = formatDateToBrazil(item?.data);

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
        <img src={`data:image/jpeg;base64,${item.img}`} style={{ width: '100%', height: 'auto' }} alt="imagem" />
        <Text className="card-name" style={{
          fontSize: "20px",
          textAlign: "center",
          margin: "10px 0",
          color: appConfig.theme.colors.neutrals["800"]
        }}>{item.text}</Text>
        <Box className="card-content" style={{ padding: "5px" }}>
          <Text style={{ margin: "10px 0", fontSize: "12px", color: appConfig.theme.colors.neutrals["700"] }}>Capturado em: {formattedDate || 'Data não disponível'}</Text>
          <Text style={{ margin: "10px 0", fontSize: "12px", color: appConfig.theme.colors.neutrals["700"] }}>Estação: {item?.station}</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default function PaginaInicial() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(20);
  const [isLoading, setIsLoading] = useState(true); // Adiciona estado de carregamento
  const roteamento = useRouter();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Ativa o estado de carregamento
      try {
        const response = await fetch(`http://177.70.102.109:3037/capture?page=${page}&limit=${limit}`);
        const result = await response.json();
        setData(result.results);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
      setIsLoading(false); // Desativa o estado de carregamento
    }

    fetchData();

    const intervalId = setInterval(fetchData, 120000); // Atualiza a cada 2 minutos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, [page, limit]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleRefresh = () => {
    async function fetchData() {
      try {
        const response = await fetch(`http://177.70.102.109:3037/capture?page=${page}&limit=${limit}`);
        const result = await response.json();
        setData(result.results);
        setTotalPages(result.totalPages);
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
          {isLoading ? (
            <Text style={{ alignSelf: "center", marginTop: "20px" }}>Carregando...</Text>
          ) : (
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
                {data?.map((item) => (
                  <Card
                    key={item.url}
                    item={item}
                    onClick={() => handleCardClick(item)}
                  />
                ))}
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  marginBottom: "10px"
                }}
              >
                <Button style={{ backgroundColor: "#333333" }} label="Anterior" onClick={handlePrevPage} disabled={page === 1} />
                <Text style={{ alignSelf: "center" }}>Página {page} de {totalPages}</Text>
                <Button style={{ backgroundColor: "#333333" }} label="Próximo" onClick={handleNextPage} disabled={page === totalPages} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
    </>
  );
}
