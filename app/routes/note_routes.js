module.exports = function(app, db) {
    var ObjectID = require('mongodb').ObjectID;
    
    // create a note
    app.post('/notes', (req, res) => {
        const note = {
            title: req.body.title,
            text: req.body.body
        };
        db.collection('notes').insert(note, (error, result) => {
            if (error) {
                res.send({ error: 'An error has occured' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    
    // read a specific note
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { _id: new ObjectID(id) };
        db.collection('notes').findOne(details, (error, item) => {
            if (error) {
                res.send({ error: 'An error has occured' });
            } else {
                res.send(item);
            }
        });
    });
    
    // delete a specific note
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { _id: new ObjectID(id) };
        db.collection('notes').remove(details, (error, item) => {
            if (error) {
                res.send({ error: 'An error has occured' });
            } else {
                res.send({ success: 'Note ' + id + ' deleted' });
            }
        });
    });
    
    // update a specific note
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { _id: new ObjectID(id) };
        const note = {
            title: req.body.title,
            text: req.body.body
        };
        db.collection('notes').update(details, note, (error, result) => {
            if (error) {
                res.send({ error: 'An error has occured' });
            } else {
                res.send(note);
            }
        });
    });
};