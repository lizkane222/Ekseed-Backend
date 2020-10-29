/* External Modules*/
const router = require("express").Router();
const ctrl = require('../controllers');

const authRequired = require("../middleware/authRequired");


// base route : /connection

/* Routes */
// router.get('/', ctrl.connection.index);
router.get('/', authRequired, ctrl.connection.index);
router.get('/:id', authRequired, ctrl.connection.show);
router.post('/new', authRequired, ctrl.connection.create);
// router.put('/:id/edit', authRequired, ctrl.connection.edit);
router.put('/:id', authRequired, ctrl.connection.update);
router.delete('/:id', authRequired, ctrl.connection.destroy)

/* Server Listener */
module.exports = router;
