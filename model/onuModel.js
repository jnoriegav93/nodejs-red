const { mongoose } = require("mongoose");

const onuSchema = new mongoose.Schema(
    {
        onu_id             :{ type: Number },
        hilo_id            :{ type: Number },
        splitter_id        :{ type: Number },
        geom               :{ type: String },
        cliente_nombre     :{ type: String },
        cliente_direccion  :{ type: String },
        velocidad_mb       :{ type: Number },
        inicio_contrato    :{ type: Date },
        monto_pago         :{ type: Number },
        icono              :{ type: String },
        estado             :{ type: Number, default: 1 }
    },{
        timestamps: true,
        versionKey: false
    }
)

const ModelOnu = mongoose.model("onu",onuSchema);
module.exports = ModelOnu;