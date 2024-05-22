import Mufa from '../models/mufaModel.js';

export const listarMufas = async (req, res) =>{
    try{
        // const mufas = await Mufa.find({ usuario: req.user.id, estado: 1 });
        const mufas = await Mufa.find({ estado: 1 });
        res.json(mufas);

    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const crearMufa = async (req, res) =>{
    try{
        const {
                poste_id,
                capacidad,
                codigo,
                hilo_id_entrada,
                hilo_id_salida,
                geom
            } = req.body;
        const nuevo = new Mufa({
            poste_id,
            capacidad,
            codigo,
            hilo_id_entrada,
            hilo_id_salida,
            geom,
            usuario: req.user.id
        })
        const guardado = await nuevo.save();
        res.json(guardado);

    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const obtenerMufa = async (req, res) =>{
    try{
        const objeto = await Mufa.findOne({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const eliminarMufa = async (req, res) =>{
    try{
        const objeto = await Mufa.findByIdAndDelete({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.sendStatus(204);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const actualizarMufa = async (req, res) =>{
    try{
        const objeto = await Mufa.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}