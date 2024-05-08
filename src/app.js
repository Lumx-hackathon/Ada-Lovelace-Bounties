const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid'); // Pacote para gerar IDs únicos

const app = express();
app.use(bodyParser.json());

// Simulação de um banco de dados simples
let projects = [];
let wallets = [];

// Endpoint para criar um novo projeto
app.post('/projects', (req, res) => {
  const { name, blockchainName } = req.body;

  // Verifica se todos os campos necessários foram fornecidos
  if (!name || !blockchainName) {
    return res.status(400).json({ error: 'Nome do projeto e nome do blockchain são obrigatórios.' });
  }

  // Verifica se o nome do blockchain é válido
  const validBlockchains = ['Ethereum', 'Polygon', 'Chiliz'];
  if (!validBlockchains.includes(blockchainName)) {
    return res.status(400).json({ error: 'Nome do blockchain inválido.' });
  }

  // Cria um novo projeto
  const project = {
    id: uuid.v4(), // Gera um ID único
    name,
    blockchain: {
      name: blockchainName
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    apiKey: uuid.v4() // Gera uma chave de API única
  };

  // Adiciona o novo projeto à lista de projetos
  projects.push(project);

  // Retorna o novo projeto criado
  res.status(201).json(project);
});

// Endpoint para criar uma nova carteira
app.post('/wallets', (req, res) => {
  const { projectId } = req.body;

  // Verifica se o ID do projeto foi fornecido
  if (!projectId) {
    return res.status(400).json({ error: 'Project ID is required.' });
  }

  // Cria uma nova carteira
  const wallet = {
    id: uuid.v4(), // Gera um ID único
    address: generateRandomAddress(), // Função fictícia para gerar um endereço aleatório
    projectId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Adiciona a nova carteira à lista de carteiras
  wallets.push(wallet);

  // Retorna a nova carteira criada
  res.status(201).json(wallet);
});

// Função fictícia para gerar um endereço aleatório (substitua por uma lógica real)
function generateRandomAddress() {
  return '0x' + Math.random().toString(16).substr(2, 40); // Gera um endereço hexadecimal de 40 caracteres
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});