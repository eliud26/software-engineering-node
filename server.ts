import express from 'express';
const app = express();

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

// require('./controllers/TuitController')(app);
// require('./controllers/UserController')(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);