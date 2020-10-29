/* External Modules*/
const router = require("express").Router();
const ctrl = require("../controllers");

const authRequired = require("../middleware/authRequired");

// base route : user

/* Routes */

router.get("/", authRequired, ctrl.user.show);
// router.get("/:id", authRequired, ctrl.user.show);
// router.post("/", authRequired, ctrl.user.create);
router.put("/:id", authRequired, ctrl.user.update);
router.delete("/:id", authRequired, ctrl.user.destroy);

/* Exports */
module.exports = router;