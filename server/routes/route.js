const { register } = require("../controller/usercontroller");
const {login}=require("../controller/usercontroller")
const router = require("express").Router();

router.post("/signup",register);
router.post("/signin",login);
module.exports = router;