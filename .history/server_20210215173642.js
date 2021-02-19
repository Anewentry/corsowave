const express = require ('express');

const app = express ();

app.get('/', (req,res) => {
    res.sendFile('index.html', {root:___corsowave});
})

let port = process.env.port||5000;
app.listen (port, () => {
    console.log(__corsowave);
    console.log("listening port"+ port);
});