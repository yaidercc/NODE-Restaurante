const {
    Schema,
    model
} = require("mongoose")

const categorySchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    }
})

categorySchema.methods.toJSON = function () {
    const {
        __v,
        password,
        _id,
        ...category
    } = this.toObject();
    return {
        uuid: _id,
        ...category
    };
}

module.exports = model('Category', categorySchema);