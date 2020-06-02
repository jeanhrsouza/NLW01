import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    //JSON
    response.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Daniel'
    ]);
});

app.listen(3333);