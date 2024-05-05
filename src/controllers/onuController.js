import Onu from '../models/onuModel.js';

export const listarOnus = async (req, res) =>{
    try{
        // const onus = await Onu.find({ usuario: req.user.id, estado: 1 });
        const onus = await Onu.find({ estado: 1 });
        res.json(onus);

    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const crearOnu = async (req, res) =>{
    try{
        const {
                hilo_id,
                splitter_id,
                geom,
                cliente_nombre,
                cliente_direccion,
                velocidad_mb,
                inicio_contrato,
                monto_pago,
                icono
            } = req.body;
        const nuevo = new Onu({
            hilo_id,
            splitter_id,
            geom,
            cliente_nombre,
            cliente_direccion,
            velocidad_mb,
            inicio_contrato,
            monto_pago,
            icono,
            usuario: req.user.id
        })
        const guardado = await nuevo.save();
        res.json(guardado);

    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const obtenerOnu = async (req, res) =>{
    try{
        const objeto = await Onu.findOne({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const eliminarOnu = async (req, res) =>{
    try{
        const objeto = await Onu.findByIdAndDelete({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.sendStatus(204);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const actualizarOnu = async (req, res) =>{
    try{
        const objeto = await Onu.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}