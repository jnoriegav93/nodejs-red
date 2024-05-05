import { mongoose } from "mongoose";

const onuSchema = new mongoose.Schema(
    {
        hilo_id            :{ type: String, required: true, trim: true },
        splitter_id        :{ type: String, required: true, trim: true },
        cliente_nombre     :{ type: String, required: true, trim: true },
        cliente_direccion  :{ type: String, required: true, trim: true },
        velocidad_mb       :{ type: String, required: true, trim: true },
        inicio_contrato    :{ type: String, required: true, trim: true },
        monto_pago         :{ type: String, required: true, trim: true },
        icono              :{ type: String, required: true, trim: true },
        geom               :{ type: String, required: true, trim: true },
        estado             :{ type: String, trim: true, default: 1 },
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

const ModelOnu = mongoose.model("onu",onuSchema);
export default ModelOnu;