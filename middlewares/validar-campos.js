const {
    validationResult
} = require("express-validator")
const employees = require("../models/employees")

const validarCampos = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors)
    next()
}
const validateIdCardOwner = async (req, res, next) => {
    const {
        IdCard
    } = req.body;
    const {
        id
    } = req.params;
    const employee = await employees.findOne({
        IdCard
    });
    if (employee && employee._id != id) return res.status(400).json({
        error: "El numero de identificacion ya esta en uso."
    })
    next();
}

module.exports = {
    validarCampos,
    validateIdCardOwner
}