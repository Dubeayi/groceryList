const express = require('express')
const router = express.Router();
const controller = require('./controller');

router
 .route('/list')
 .get(controller.getAll)
 .post(controller.postItem)

 router
 .route('/list/:id')
 .delete(controller.deleteItem)
 .put(controller.updateItem)


 module.exports = router;