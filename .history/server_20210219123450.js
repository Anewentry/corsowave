const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {root:_dirname});
})

app.use(express.static("corsowave" + "/dist"));

let port = process.env.port || 5000;
app.listen (port, () => {
    console. log (_dirname);
    console. log("Listening Port"+ port);
});