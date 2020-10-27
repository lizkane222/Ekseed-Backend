/* External Modules*/
const router = require("express").Router();
const ctrl = require('../controllers');

const authRequired = require("../middleware/authRequired");

/* Internal Modules */
/* Instanced Modules */
/* Configuration */
/* Middleware */


/* Routes */
router.get('/', authRequired, ctrl.userConnection.index);
router.get('/:id', ctrl.userConnection.show);
router.post('/', ctrl.userConnection.create);
router.put('/:id', ctrl.userConnection.update);
router.delete('/:id', ctrl.userConnection.destroy)

/* Server Listener */
module.exports = router;
