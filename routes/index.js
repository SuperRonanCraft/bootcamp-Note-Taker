const router = require("express").Router();
const api = require("./api/index");

//html routes
router.use(require("./htmlRoutes"));

// /api routes
router.use("/api", api);

module.exports = router;
