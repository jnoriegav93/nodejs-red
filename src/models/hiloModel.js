import { mongoose } from "mongoose";

const hiloSchema = new mongoose.Schema(
    {
        codigo             :{ type: String, required: true, trim: true, unique: true },
        tipo               :{ type: String, required: true, trim: true },
        nivel              :{ type: String, required: true, trim: true },
        condicion          :{ type: String, required: true, trim: true },
        capacidad          :{ type: String, required: true, trim: true },
        longitud           :{ type: String, required: true, trim: true },
        color_hex          :{ type: String, required: true, trim: true },
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

const ModelHilo = mongoose.model("hilos",hiloSchema);
export default ModelHilo;