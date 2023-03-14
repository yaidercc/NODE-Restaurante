const {
    Schema,
    model
} = require("mongoose");


const salesHeaderSchema = Schema({

    menu_id: {
        type: Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    subtotal: {
        type: Number,
    },

})

salesHeaderSchema.methods.toJSON = function () {
    const {
        __v,
        _id,
        ...sales
    } = this.toObject();
    return {
        uuid: _id,
        ...sales
    };
}

module.exports = model("sales_header", salesHeaderSchema);