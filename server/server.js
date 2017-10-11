const axios = require('axios')
require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , articleController = require('./controller/articleController');
    // , articleController = require('./articleController')

    const app = express();
    app.use( bodyParser.json() );
    app.use( cors() )

    massive( process.env.CONNECTION_STRING ).then(db => {
        app.set('db', db)
        const port = 3008;
        app.listen(port, () => console.log('Ship docked at port', port))
    })

    app.get('/api/articles', articleController.readArticles);
    app.get('/api/articles/:id', articleController.readOneArticle);
    app.post('/api/articles', articleController.createArticle);
    app.patch('/api/articles/:id', articleController.updateArticle);
    app.delete('/api/articles/:id', articleController.deleteArticle);

