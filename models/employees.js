const {
    Schema,
    model
} = require("mongoose");

const employeesSchema = Schema({
    IdCard: {
        type: String,
        required: [true, "El documento es obligatorio"],
        unique: true
    },
    names: {
        type: String,
        required: [true, "Los nombres son obligatorios"]
    },
    last_names: {
        type: String,
        required: [true, "Los apellidos son obligatorios"]
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    phone_number: {
        type: String,
    }
});

employeesSchema.methods.toJSON = function () {
    const {
        __v,
        _id,
        ...employee
    } = this.toObject();
    return {
        uuid: _id,
        ...employee
    };
}


module.exports = model("Employee", employeesSchema)