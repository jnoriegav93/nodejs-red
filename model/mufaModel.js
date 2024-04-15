const { mongoose } = require("mongoose");

const mufaSchema = new mongoose.Schema(
    {
        mufa_id            :{ type: Number },
        poste_id           :{ type: Number },
        capacidad          :{ type: Number },
        codigo             :{ type: String },
        hilo_id_entrada    :{ type: Number },
        hilo_id_salida     :{ type: Number },
        geom               :{ type: String },
        estado             :{ type: Number, default: 1 }
    },{
        timestamps: true,
        versionKey: false
    }
)

const ModelMufa = mongoose.model("mufas",mufaSchema);
module.exports = ModelMufa;
