const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Listening at port :' + 3000);
}).on('error', function (err) {
    console.log(err);
});