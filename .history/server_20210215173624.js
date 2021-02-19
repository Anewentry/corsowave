const express = require ('express');

const app = express ();

app.get('/', (req,res) => {
    res.sendFile('index.html', {root:__corsowave});
})

let port = process.env.port||5000;
app.listen (port, () => {
    console.log(_corso);
    console.log("listening port"+ port);
});