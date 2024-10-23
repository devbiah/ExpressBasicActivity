// Importar o módulo Express
const express = require('express');

// Criar uma instância do aplicativo Express
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/sobre', (req, res) => {
    res.send('Oi, me chamo Beatriz e essa rota é sobre mim!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
