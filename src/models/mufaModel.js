import { mongoose } from "mongoose";

const mufaSchema = new mongoose.Schema(
    {
        poste_id           :{ type: String, required: true, trim: true },
        capacidad          :{ type: String, required: true, trim: true },
        codigo             :{ type: String, required: true, trim: true, unique: true },
        hilo_id_entrada    :{ type: String, required: true, trim: true },
        hilo_id_salida     :{ type: String, required: true, trim: true },
        geom               :{ type: String, required: true, trim: true },
        estado             :{ type: Number, required: true, trim: true, default: 1 },
        usuario               :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },{
        timestamps: true,
        versionKey: false
    }
)

const ModelMufa = mongoose.model("mufas",mufaSchema);
export default ModelMufa;

