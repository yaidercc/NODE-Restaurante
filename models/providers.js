const {
    Schema,
    model
} = require("mongoose");


const providersSchema = Schema({
    name: {
        type: String,
        required: [true, "El nombre del proveedor es requerido"]
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },

})

providersSchema.methods.toJSON = function () {
    const {
        __v,
        _id,
        ...providers
    } = this.toObject();
    return {
        uuid: _id,
        ...providers
    };
}

module.exports = model("provider", providersSchema)