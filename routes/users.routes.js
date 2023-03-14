const {
    Router
} = require("express");

const {
    getUsers
} = require("../controllers/employees.controllers");
const {
    check
} = require("express-validator");
const {
    validarCampos
} = require("../middlewares/validar-campos");

const router = Router();


// router.get("/user/:id", [
//     check("id", "El usuario con este id no existe").isMongoId(),
//     validarCampos
// ], getUser)

module.exports = router;