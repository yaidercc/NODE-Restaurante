const employees = require("../models/employees")

/**
 * Funcion encargada de validar la existencia de un usuario por su identificacion 
 * @param {*} IdCard 
 */
const existsEmployeeByIdCard = async (IdCard) => {
    const findEmployee = await employees.findOne({IdCard});
    if (findEmployee) throw new Error(`El empleado con el numero de document: ${IdCard}, ya existe.`);
}

/**
 * Funcion encargada de validar la existencia de un usuario por su id 
 * @param {*} id 
 */
const existsEmployeeById = async (id) => {
    const findEmployee = await employees.findById(id);
    if (!findEmployee) throw new Error(`El empleado con el numero de document: ${IdCard}, no existe.`);
}



module.exports = {
    existsEmployeeByIdCard,
    existsEmployeeById
}