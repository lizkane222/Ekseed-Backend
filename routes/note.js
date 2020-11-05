/* External Modules*/
const router = require("express").Router();
const ctrl = require('../controllers');

const authRequired = require("../middleware/authRequired");


// base route : /note

/* Routes */
// router.get('/', ctrl.note.index);
// router.get('/', authRequired, ctrl.note.index);
router.get('/:id', authRequired, ctrl.note.show);
router.post('/', authRequired, ctrl.note.create);
router.put('/:id', authRequired, ctrl.note.update);
router.delete('/:id', authRequired, ctrl.note.destroy)

/* Server Listener */
module.exports = router;
