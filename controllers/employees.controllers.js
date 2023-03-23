const {
    response
} = require("express")
const Employee = require("../models/employees");

/**
 * Controlador encargado de crear un empleado
 * @param {*} req 
 * @param {*} res 
 */
const createEmployee = async (req, res = response) => {
    try {
        const {
            IdCard,
            names,
            last_names,
            status,
            ...body
        } = req.body;

        const data = {
            IdCard,
            names: names.toUpperCase(),
            last_names: last_names.toUpperCase(),
            ...body
        }

        const empleado = new Employee(data);

        await empleado.save();

        res.status(200).json({
            ok: true,
            msg: "Empleado creado con exito.",
            empleado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
}

/**
 * Controlador encargado de obtener todos los empleados
 * @param {*} req 
 * @param {*} res 
 */
const getEmployees = async (req, res) => {
    const employees = await Employee.find({status: true});
    return res.json({
        employees
    })
}

/**
 * Controlador encargado de obtener la informacion de un empleado
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getEmployee = async (req, res) => {
    const {
        id
    } = req.params;
    const employee = await Employee.findOne({_id:id,status: true}) || "El empleado no existe o no esta disponible.";

    return res.json(employee)
}

/**
 * Controlador encargado de actualizar la informcion de un empleado
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateEmployee = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            status,
            ...data
        } = req.body;

        data.names = data.names.toUpperCase();
        data.last_names = data.last_names.toUpperCase();

        const employee = await Employee.findByIdAndUpdate(id, data, {
            new: true
        })

        return res.json({
            msg: "Empleado actualizado con exito.",
            employee,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
}

/**
 * Controlador encargado de eliminar logicamente un empleado
 * @param {*} req 
 * @param {*} res 
 */
const deleteEmployee = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        await Employee.findByIdAndUpdate(id, {
            status: false
        })

        res.json({
            msg:"Empleado deshabilitado con exito."
        })
    } catch (error) {

    }
}

module.exports = {
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
}