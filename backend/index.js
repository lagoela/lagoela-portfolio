require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
// const cors = require('cors');

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});