const express = require('express');

const app = express ();

app.get('/', (req,res) => {
    res.sendFile('index.html', {root:__dirname});
})

let port = process.env.port||8080;
app.listen (port, () => {
    console. log (__dirname);
    console. log("Listening Port"+ port);
});