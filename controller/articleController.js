module.exports = {
    createArticle: (req, res) => {
        const db = req.app.get('db');
        const { title, imgurl, article } = req.body;

        db.createArticle([title, imgurl, article])
        .then( () => res.status(200).send() )
        .catch((err) => {
            console.log(err)
        })

    },

    readArticle: ( req, res ) => {
        req.app.get('db').readArticle().then( articles => {
            res.status(200).send(articles);
        }).catch((err) => {console.log(err)})
    },

    updateArticle: ( req, res ) => {
        const db = req.app.get('db');
        const { params } = req
    

        db.updateArticle([ req.params.id, req.body.title, req.body.article, req.body.imgurl ])
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