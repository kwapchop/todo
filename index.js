const express = require('express');
const app = express();
const port = 3010;

const path = require('path');

app.use('/',express.static(__dirname + 'public'))

app.get('/', (req, res) => {
    // res.send('hello world')
    res.sendFile('/public/index.html')
})
app.get('/todo', (req, res) => {
    // res.send('hello world')
    res.sendFile('/public/index.html')
})

app.listen(port, () => {
    console.log(`Начало работы сервера на порту ${port}`)
})