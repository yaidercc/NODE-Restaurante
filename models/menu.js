const {
    Schema,
    model
} = require("mongoose");


const menuSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del menu es obligatorio"],
        unique: true
    },
    img: {
        type: String,
    },
    description: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    }
});

menuSchema.methods.toJSON = function () {
    const {
        __v,
        _id,
        ...menu
    } = this.toObject();
    return {
        uuid: _id,
        ...menu
    };
}


module.exports = model("Menu", menuSchema)