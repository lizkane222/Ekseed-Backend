/* External Modules*/
const router = require("express").Router();
const ctrl = require('../controllers');

const authRequired = require("../middleware/authRequired");


// base route : /connection

/* Routes */
// router.get('/', ctrl.connection.index);
router.get('/', authRequired, ctrl.connection.index);
router.get('/:id', ctrl.connection.show);
router.post('/', ctrl.connection.create);
router.put('/:id', ctrl.connection.update);
router.delete('/:id', ctrl.connection.destroy)

/* Server Listener */
module.exports = router;
