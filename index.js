
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/sobre', (req, res) => {
    res.send('Hi, my name is Beatriz, this route is about me!');
});

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});
