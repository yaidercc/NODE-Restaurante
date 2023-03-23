const employees = require("../models/employees")

/**
 * Funcion encargada de validar 
 * @param {*} IdCard 
 */
const existsEmployee = async (IdCard) => {
    const findEmployee = await employees.findOne({IdCard});
    if (findEmployee) throw new Error(`El empleado con el numero de document: ${IdCard}, ya existe.`);
}

module.exports = {
    existsEmployee
}