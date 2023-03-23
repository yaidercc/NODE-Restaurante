const {
    Router
} = require("express");

const employeeController = require("../controllers/employees.controllers");
const { validarCampos, validateIdCardOwner } = require("../middlewares/validar-campos");
const { check } = require("express-validator");
const { existsEmployeeByIdCard,existsEmployeeById } = require("../helpers/db-validators");

const router = Router();

router.get("/", employeeController.getEmployees);

router.get("/:id", [
    check("id", "El empleado con este id no existe").isMongoId(),
    validarCampos
], employeeController.getEmployee);

router.post("/",[
    check("IdCard","El numero de identificacion es obligatorio").not().isEmpty(),
    check("names","El nombre es obligatorio").not().isEmpty(),
    check("last_names","El apellido es obligatorio").not().isEmpty(),
    check("phone_number","El telefono es obligatorio").not().isEmpty(),
    check("IdCard").custom(existsEmployeeByIdCard),
    validarCampos
],employeeController.createEmployee);

router.put("/:id",[
    check("id","El numero de identificacion es obligatorio").not().isEmpty(),
    check("id","El numero de identificacion es incorrecto").isMongoId(),
    check("IdCard","El numero de identificacion es obligatorio").not().isEmpty(),
    check("names","El nombre es obligatorio").not().isEmpty(),
    check("last_names","El apellido es obligatorio").not().isEmpty(),
    validateIdCardOwner,
    validarCampos
],employeeController.updateEmployee);


router.delete("/:id",[
    check("id","El numero de identificacion es obligatorio").not().isEmpty(),
    check("id","El numero de identificacion es incorrecto").isMongoId(),
    check("id").custom(existsEmployeeById),
    validarCampos
],employeeController.deleteEmployee);

module.exports = router;