const router = require("express").Router();
const api = require("./api/index");

//html routes
//Handle any other base `/` routes
router.use(require("./htmlRoutes"));

// /api routes
//Handle all /api routing
router.use("/api", api);

module.exports = router;
