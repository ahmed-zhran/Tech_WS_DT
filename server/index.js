const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/home', (request, response) => {
    response.json("hello from server");
})









app.listen(5000, () => {
    console.log('app listening on port 5000');
})