const axios = require('axios')
require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , articleController = require('./controller/articleController')
    , session = require('express-session');

    const app = express();
    app.use( bodyParser.json() );
    app.use( cors() )
    app.use(session({
        secret: "super secrets",
        saveUninitialized: false,
        resave: false
    }));

    massive( process.env.CONNECTION_STRING ).then(db => {
        app.set('db', db)
        const port = 3008;
        app.listen(port, () => console.log('Ship docked at port', port))
    })


    // Articles
    app.get('/api/articles', articleController.readArticles);
    app.get('/api/articles/:id', articleController.readOneArticle);
    app.post('/api/articles', articleController.createArticle);
    app.patch('/api/articles/:id', articleController.updateArticle);
    app.delete('/api/articles/:id', articleController.deleteArticle);


    //Login

    app.post('/register', (req, res) => {
        const { username, password } = req.body;
        req.app.get('db').create_user([username, password]).then(() => {
            req.session.user = { username };
            res.json({ username });
        }).catch(error => {
            console.log('error', error);
        })
    });

    app.post('/login', (req, res) => {
        const { username, password } = req.body;
        app.get('db').find_user([username]).then(data => {
            if (data.length) {
                if (data[0].password === password) {
                    req.session.user = {username};
                    res.json({ username });
                } else {
                    res.status(403).json({message: 'Invalid password'});
                }
            }else {
                res.status(403).json({message: 'Unknown user'});
            }
        }).catch(error => {
            console.log('error', error)
        })
    })

    app.post('/logout', (req, res) => {
        req.session.destroy();
        res.send();
    })

    