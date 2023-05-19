const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/bfhl",userController.getReq);
router.post("/bfhl",userController.postReq);
module.exports = router;