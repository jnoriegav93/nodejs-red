import { mongoose } from "mongoose"; 

const posteSchema = new mongoose.Schema(
    {
        codigo             :{ type: String, required: true, trim: true, unique: true },
        propietario        :{ type: String, required: true, trim: true },
        tipo               :{ type: String, required: true, trim: true },
        material           :{ type: String, required: true, trim: true },
        f12                :{ type: String, required: true, trim: true },
        f12b               :{ type: String, required: true, trim: true },
        f24                :{ type: String, required: true, trim: true },
        f24b               :{ type: String, required: true, trim: true },
        f48                :{ type: String, required: true, trim: true },
        f48b               :{ type: String, required: true, trim: true },
        f96                :{ type: String, required: true, trim: true },
        f96b               :{ type: String, required: true, trim: true },
        f144               :{ type: String, required: true, trim: true },
        f144b              :{ type: String, required: true, trim: true },
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

const ModelPoste = mongoose.model("postes_",posteSchema);
export default ModelPoste;

