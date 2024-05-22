import Splitter from '../models/splitterModel.js';

export const listarSplitters = async (req, res) =>{
    try{
        // const splitters = await Splitter.find({ usuario: req.user.id, estado: 1 });
        const splitters = await Splitter.find({ estado: 1 });
        res.json(splitters);

    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const crearSplitter = async (req, res) =>{
    try{
        const {
            splitter_padre,
            poste_id,
            hilo_entrada_id,
            geom,
            codigo,
            capacidad,
            nro,
            zona,
            tipo,
            pon,
            nivel,
            icono
        } = req.body;
        const nuevo = new Splitter({
            splitter_padre,
            poste_id,
            hilo_entrada_id,
            geom,
            codigo,
            capacidad,
            nro,
            zona,
            tipo,
            pon,
            nivel,
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
export const obtenerSplitter = async (req, res) =>{
    try{
        const objeto = await Splitter.findOne({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const eliminarSplitter = async (req, res) =>{
    try{
        const objeto = await Splitter.findByIdAndDelete({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.sendStatus(204);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const actualizarSplitter = async (req, res) =>{
    try{
        const objeto = await Splitter.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}