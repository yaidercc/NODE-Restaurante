const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("Base de datos conectada".bgGreen)
    } catch (error) {
        throw new Error('Error a la hora de iniciar la base de datos.');
    }
}

module.exports = {
    dbConnection
}

