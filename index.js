const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded( { extended: false } ));

const PORT = process.env.PORT || 5000;

app.get('/', ( req, res ) =>{
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/test-text', ( req, res ) => {
    res.send(`
            <div class="alert alert-primary" role="alert">
                This text is a sample of element send from server via ajax\'s request
            </div`);
});


app.post('/read-param', ( req, res ) => {
    console.log(req.body);
    res.status(200).send('perfect!');
});

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});