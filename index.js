const express = require('express');
const app = express();
const PORT = 3000;

app.get('/001', (req, res) => {
    res.status(200).send({
        titel:'rapunzel',
        service:'disney',
        poster:'https://i.ebayimg.com/images/g/WaUAAOSwd4tTreij/s-l1200.jpg'
    })
});
app.get('/002', (req, res) => {
    res.status(200).send({
        titel:'deadpool 2',
        service:'disney',
        poster:'https://m.media-amazon.com/images/I/91+od0A3itL._AC_UF894,1000_QL80_.jpg'
    })
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

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
);

