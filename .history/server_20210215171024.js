const express = require ('express');

const app = express ();

app.get('/', (req,res) => {
    res.sendFile('index.html', {root:__dirname});
})

let port = Process.env.Port||5000;
app.listen(port, (=>{}))