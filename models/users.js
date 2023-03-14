const {
    Schema,
    model
} = require("mongoose")

const usersSchema = Schema({
    user: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
    },
    role: {
        type: String,
        required: true,
        default: "USER_ROLE",
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    status: {
        type: Boolean,
        default: true
    },
})

usersSchema.methods.toJSON = function () {
    const {
        __v,
        password,
        _id,
        ...user
    } = this.toObject();
    return {
        uuid: _id,
        ...user
    };
}

module.exports = model('User', usersSchema);