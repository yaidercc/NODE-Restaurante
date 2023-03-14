const {
    Schema,
    model
} = require("mongoose");


const inventorySchema = Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    quantity: {
        type: Number,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category ',
        required: true
    },
})

inventorySchema.methods.toJSON = function () {
    const {
        __v,
        _id,
        ...inventory
    } = this.toObject();
    return {
        uuid: _id,
        ...inventory
    };
}



module.exports = model("Inventory", inventorySchema)