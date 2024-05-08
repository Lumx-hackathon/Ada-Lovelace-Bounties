const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
app.use(bodyParser.json());

let wallets = [];

// Função para validar a chave de API
const isValidApiKey = (apiKey) => {
  // Aqui você pode implementar a lógica real de validação da chave de API
  const validApiKey = 'f9b4e892-f8ec-4f50-9c1b-2a796159ba90'; // Substitua 'sua_chave_de_api' pela chave válida
  return apiKey === validApiKey;
};

// Função para gerar um endereço de carteira
const generateWalletAddress = () => {
  // Aqui você pode implementar a lógica real para gerar um endereço de carteira
  return uuid.v4();
};

const authenticate = (req, res, next) => {
  const apiKey = req.headers.authorization;

  if (!apiKey || !apiKey.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Chave de API não fornecida.' });
  }

  const providedApiKey = apiKey.split(' ')[1];
  const isValid = isValidApiKey(providedApiKey);

  if (!isValid) {
    return res.status(401).json({ error: 'Chave de API inválida.' });
  }

  next();
};

// Endpoint para criar uma nova carteira
app.post('/wallets', authenticate, (req, res) => {
  const { projectId } = req.body;

  const wallet = {
    id: uuid.v4(),
    address: generateWalletAddress(),
    projectId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  wallets.push(wallet);

  res.status(201).json(wallet);
});

// Endpoint para ler uma carteira
app.get('/wallets/:walletId', authenticate, (req, res) => {
  const { walletId } = req.params;

  // Encontre a carteira com o ID fornecido
  const wallet = wallets.find(wallet => wallet.id === walletId);

  // Verifique se a carteira existe
  if (!wallet) {
    return res.status(404).json({ error: 'Carteira não encontrada.' });
  }

  // Simule uma lista de tokens para esta carteira
  const tokens = [
    { symbol: 'ETH', balance: '10' },
    { symbol: 'BTC', balance: '5' }
    // Adicione mais tokens conforme necessário
  ];

  // Retorne os detalhes da carteira junto com os tokens
  res.status(200).json({
    id: wallet.id,
    address: wallet.address,
    projectId: wallet.projectId,
    createdAt: wallet.createdAt,
    updatedAt: wallet.updatedAt,
    tokens: tokens
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});