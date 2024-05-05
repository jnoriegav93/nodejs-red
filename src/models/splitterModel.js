import { mongoose } from "mongoose";

const splitterSchema = new mongoose.Schema(
    {
        splitter_padre     :{ type: String, required: false, trim: true },
        poste_id           :{ type: String, required: true, trim: true },
        hilo_entrada_id    :{ type: String, required: true, trim: true },
        codigo             :{ type: String, required: true, trim: true, unique: true },
        capacidad          :{ type: String, required: true, trim: true },
        nro                :{ type: String, required: true, trim: true },
        zona               :{ type: String, required: true, trim: true },
        tipo               :{ type: String, required: true, trim: true },
        pon                :{ type: String, required: true, trim: true },
        nivel              :{ type: String, required: true, trim: true },
        icono              :{ type: String, required: true, trim: true },
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

const ModelSplitter = mongoose.model("splitters",splitterSchema);
export default ModelSplitter;

