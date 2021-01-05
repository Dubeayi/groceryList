const db = require('./');

const models = {
    getList: (callback) => {
        let query = `SELECT * FROM groceryList2`;
        db.query(query, (err, results) => {
            // callback(err,results);
          if (err) {
              callback(err);
          } else {
              callback(null, results);
          }
        });
    },
    addItem: (item, quantity, callback) => {
        let query = `INSERT INTO groceryList2 (item, quantity) VALUES ("${item}", ${quantity})`
        db.query(query, (err) => {
            callback(err)
        });
    },
    updateItem: (id, quantity, callback) => {
        let query = `UPDATE groceryList2 SET quantity = ${quantity} WHERE id = ${id}`
        db.query(query, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        })
    },
    deleteItem: (index, callback) => {
        let query = `DELETE FROM groceryList2 where id = ${index}`
        db.query(query, (err) => {
            callback(err);
        });
    }
}

module.exports = models;