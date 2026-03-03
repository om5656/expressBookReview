const express = require('express');
const bodyParser = require('body-parser');
const generalRouter = require('./router/general');

const app = express();
app.use(bodyParser.json());

app.use('/', generalRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});