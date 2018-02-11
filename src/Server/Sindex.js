const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const booksController = require('./controllers/music_controller');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'));

app.post('/api/music/', musicController.create);
app.get('/api/music/', musicController.read);
app.put('/api/music/', musicController.update);
app.delete('/api/music/:id', musicController.delete);

const port = 3005
app.listen(port, () => console.log(`listening on port ${port}`))