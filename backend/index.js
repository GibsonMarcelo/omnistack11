const express = require('express');

const app = express();

app.get('/',(request, response) => {
    return response.json({
        evento: 'semana omnistack',
        aluno: 'marcelo gibson'
    });
});

app.listen(3333);