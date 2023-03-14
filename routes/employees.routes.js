const {
    Router
} = require("express");

const {
    getUsers, createEmployee
} = require("../controllers/employees.controllers");
const { validarCampos } = require("../middlewares/validar-campos");
const { check } = require("express-validator");

const router = Router();

// router.get("/employees", getEmployees)
// router.get("/employee/:id", [
//     check("id", "El empleado con este id no existe").isMongoId(),
//     validarCampos
// ], getEmployee)

router.post("/",[
    check("names","El nombre es obligatorio").not().isEmpty(),
    check("last_names","El apellido es obligatorio").not().isEmpty(),
    check("phone_number","El telefono es obligatorio").not().isEmpty(),
    validarCampos
],createEmployee)

module.exports = router;