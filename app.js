const express = require('express');
const gerarNumeroAleatorio = require('./utils'); // Importa o módulo personalizado para gerar número aleatório

const app = express();
const port = 8080;

// Exercício 1: Rota básica que responde "Bem-vindo!"
app.get('/', (req, res) => {
  res.send('Bem-vindo!');
});

// Exercício 2: Rota "sobre" que responde com informações sobre você
app.get('/sobre', (req, res) => {
  res.send('Garoto de programa loko da cabeca');
});

// Exercício 2: Rota "contato" que responde com suas informações de contato
app.get('/contato', (req, res) => {
  res.send('Contato: renannzin@gmail.com');
});

// Exercício 3: Rota "/numero" que responde com um número aleatório entre 1 e 10
app.get('/numero', (req, res) => {
  const numeroAleatorio = gerarNumeroAleatorio();
  res.json({ numero: numeroAleatorio });
});

// Exercício 4: Rota parametrizada "/saudacao/:nome" que responde com uma saudação personalizada
app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
});

// Exercício 5: Rota "/" que responde com uma página HTML simples
app.get('/html', (req, res) => {
  res.send(`
    <html>
      <head><title>Bem-vindo</title></head>
      <body><h1>Bem-vindo à minha página HTML!</h1></body>
    </html>
  `);
});

// Exercício 5: Rota "/api/data" que responde com um objeto JSON contendo informações básicas sobre você
app.get('/api/data', (req, res) => {
  res.json({
    nome: 'Renann',
    idade: 19,
    profissao: 'Garoto de Programa'
  });
});

// Inicializa o servidor na porta 8080
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});