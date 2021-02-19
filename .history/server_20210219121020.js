const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {root:__dirname});
})

app.use(express.static("my-wave" + "/dist"));

let port = process.env.port || 5000;
app.listen (port, (5000) => {
    console. log (__dirname);
    console. log("Listening Port"+ port);
});