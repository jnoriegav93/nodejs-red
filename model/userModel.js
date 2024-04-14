const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        nombre: { type: String},
        apellido: { type: String },
        estado: { type: Number, default: 1 }
    },{
        timestamps: true,
        versionKey: false
    }
)

const ModelUser = mongoose.model("users",userSchema);
module.exports = ModelUser;