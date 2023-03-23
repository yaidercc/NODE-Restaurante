const {
    response
} = require("express")
const Employee= require("../models/employees");
const createEmployee = async(req, res = response) => {
    try {
        const {
            IdCard,
            names,
            last_names,
            phone_number,
            address,
            email
        } = req.body;

        const empleado = new Employee({
            IdCard,
            names,
            last_names,
            address,
            email,
            phone_number
        });

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

module.exports = {
    createEmployee
}