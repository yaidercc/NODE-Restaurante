const {
    Schema,
    model
} = require("mongoose");


const salesHeaderSchema = Schema({
    date: {
        type: Date,
    },
    total_invoice: {
        type: Number,
        required: true,
    },
    quantity_products: {
        type: Number,
        required: true,
    },
    employee_id: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
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