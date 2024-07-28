// utils/formatDate.js

const formatDateToBrazil = (isoDate) => {
    try {
      // Cria um objeto Date a partir da string ISO 8601
      const date = new Date(isoDate);
  
      // Extrai os componentes da data
      const day = String(date.getUTCDate()).padStart(2, '0');
      const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Os meses são baseados em zero
      const year = date.getUTCFullYear();
      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
      // Formata a data no padrão brasileiro
      const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  
      return formattedDate;
    } catch (error) {
      console.error('Erro ao formatar a data:', error);
      return null;
    }
  };
  
  export default formatDateToBrazil;

  