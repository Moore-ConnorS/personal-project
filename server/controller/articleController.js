module.exports = {
    createArticle: (req, res) => {
        const db = req.app.get('db');
        const { title, description, imgurl, article } = req.body;

        db.createArticle([title, description, imgurl, article])
        .then( () => res.status(200).send() )
        .catch((err) => {
            console.log(err)
        })

    },

    readArticles: ( req, res ) => {
        req.app.get('db').readArticles().then( articles => {
            res.status(200).send(articles);
        }).catch((err) => {console.log(err)})
    },

    readOneArticle: (req, res ) => {
        req.app.get('db').readOneArticle([req.params.id]).then( articles => {
            res.status(200).send(articles)
        }).catch((err) => {console.log(err)})
    },

    updateArticle: ( req, res ) => {
        const db = req.app.get('db');
        const { params } = req
    
        
        db.updateArticle([ req.params.id, req.body.title, req.body.description, req.body.imgurl, req.body.article ])
        .then( articles => { res.status(200).send() })
        .catch((err) => {
            console.log(err)
        })
    },

    deleteArticle: ( req, res ) => {
        const db = req.app.get('db');

        db.deleteArticle([ req.params.id ])
        .then( () => res.status(200).send())
        .catch( (err) => {
            console.log(err)
        })
    }
}