const express = require ('express');

const app = express ();

app.get('/', (req,res) => {
    res.sendFile('index.html', {root:__dirname});
})

let port = StProcess.env.port||5000;