//this file dictates where each request should go
const router = require('./routes');
const models = require('../database/models.js');


const controller = {
    getAll: (req, res) => {
        models.getList((err, results) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(results);
            }
        });
    },

    postItem: (req, res) => {
        let item = req.body.item;
        let quantity = req.body.quantity;

        models.addItem(item, quantity, (err) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send('posted Item successfully');
            }
        })
    },

    deleteItem: (req, res) => {
        let index = req.params.id;
        console.log(index);
        models.deleteItem(index, (err) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(202).send('removed item');
            }
        })
    },

    updateItem: (req, res) => {
        let index = req.params.id;
        let quantity = req.body.quantity;

        models.updateItem(index, quantity, (err, results) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(204).send(results);
            }
        })
    }
}

module.exports = controller;