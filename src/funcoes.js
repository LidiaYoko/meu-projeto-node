// Função para filtrar não assistidos
  const naoAssistidos = (lista) => lista.filter(item => !item.assistido);

// Função para mapear títulos em maiúsculas
  const titulosMaiusculos = (lista) => lista.map(item => item.titulo.toUpperCase());

// Função para buscar por ID
  const buscarPorId = (lista, id) => lista.find(item => item.id === id);

// exp commonjs
  module.exports = {
    naoAssistidos,
    titulosMaiusculos,
    buscarPorId
  };