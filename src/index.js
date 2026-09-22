const { naoAssistidos, titulosMaiusculos, buscarPorId} = require("./funcoes");

const catalogo = [
  { id: 1, titulo: "Interestelar", genero: "Ficção Cientifica",  ano: 2014, assistido: true},
  { id: 2, titulo: "Piratas do Caribe", genero: "Ficção Cientifica",  ano: 2014, assistido: true},
  { id: 3, titulo: "Senhor dos Anéis", genero: "Fantasia", ano: 2001, assistido: false},
  { id: 4, titulo: "O Hobbit", genero: "Fantasia", ano: 2012, assistido: true },
  { id: 5, titulo: "Tróia", genero: "Histórico", ano: 2004, assistido: false }
];

console.log("Itens não assistidos:", naoAssistidos(catalogo));
console.log("Títulos em maiúsculas:", titulosMaiusculos(catalogo));
console.log("Buscar por ID (2):", buscarPorId(catalogo, 2));