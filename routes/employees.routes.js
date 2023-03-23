const {
    Router
} = require("express");

const {
    getUsers, createEmployee
} = require("../controllers/employees.controllers");
const { validarCampos } = require("../middlewares/validar-campos");
const { check } = require("express-validator");
const { existsEmployee } = require("../helpers/db-validators");

const router = Router();

// router.get("/employees", getEmployees)
// router.get("/employee/:id", [
//     check("id", "El empleado con este id no existe").isMongoId(),
//     validarCampos
// ], getEmployee)

router.post("/",[
    check("IdCard","El numero de identificacion es obligatorio").not().isEmpty(),
    check("names","El nombre es obligatorio").not().isEmpty(),
    check("last_names","El apellido es obligatorio").not().isEmpty(),
    check("phone_number","El telefono es obligatorio").not().isEmpty(),
    check("IdCard").custom(existsEmployee),
    validarCampos
],createEmployee);

module.exports = router;