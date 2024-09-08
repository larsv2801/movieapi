const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/001', (req, res) => {
    res.status(200).send({
        titel: 'rapunzel',
        service: 'disney',
        poster: 'https://i.ebayimg.com/images/g/WaUAAOSwd4tTreij/s-l1200.jpg'
    });
});
app.get('/002', (req, res) => {
    res.status(200).send({
        titel: 'deadpool 2',
        service: 'disney',
        poster: 'https://m.media-amazon.com/images/I/91+od0A3itL._AC_UF894,1000_QL80_.jpg'
    });
});

app.get('/003', (req, res) => {
    res.status(200).send({
        titel: 'The Lion King',
        service: 'disney',
        poster: 'https://m.media-amazon.com/images/I/41MMx5Oi8pL._AC_SY780_.jpg'
    });
});

app.get('/004', (req, res) => {
    res.status(200).send({
        titel: 'Frozen',
        service: 'disney',
        poster: 'https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/ABAAAOSwsNxi4dZu/$_57.JPG?set_id=880000500F'
    });
});

app.get('/005', (req, res) => {
    res.status(200).send({
        titel: 'Avengers: Endgame',
        service: 'disney',
        poster: 'https://i.etsystatic.com/12729518/r/il/fdf7b1/1948872364/il_570xN.1948872364_7kjp.jpg'
    });
});

app.get('/006', (req, res) => {
    res.status(200).send({
        titel: 'Star Wars: The Rise of Skywalker',
        service: 'disney',
        poster: 'https://m.media-amazon.com/images/I/91xCgKL-SyL.jpg'
    });
});

app.get('/007', (req, res) => {
    res.status(200).send({
        titel: 'inside out',
        service: 'disney',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg'
    });
});

app.get('/008', (req, res) => {
    res.status(200).send({
        titel: 'free guy',
        service: 'disney',
        poster: 'https://image.tmdb.org/t/p/original/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg'
    });
});

app.get('/009', (req, res) => {
    res.status(200).send({
        titel: 'x-men',
        service: 'disney',
        poster: 'https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    });
});
app.get('/010', (req, res) => {
    res.status(200).send({
        titel: 'the greatest showman',
        service: 'disney',
        poster: 'https://m.media-amazon.com/images/I/91K5rwup9QL.jpg'
    });
});

module.exports.handler = serverless(app);