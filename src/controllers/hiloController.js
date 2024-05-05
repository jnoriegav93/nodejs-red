import Hilo from '../models/hiloModel.js';

export const listarHilos = async (req, res) =>{
    try{
        // const hilos = await Hilo.find({ usuario: req.user.id, estado: 1 });
        const hilos = await Hilo.find({ estado: 1 });
        res.json(hilos);

    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const crearHilo = async (req, res) =>{
    try{
        const {
                geom,
                codigo,
                tipo,
                nivel,
                condicion,
                capacidad,
                longitud,
                color_hex
            } = req.body;
        const nuevo = new Hilo({
            geom,
            codigo,
            tipo,
            nivel,
            condicion,
            capacidad,
            longitud,
            color_hex,
            usuario: req.user.id
        })
        const guardado = await nuevo.save();
        res.json(guardado);

    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const obtenerHilo = async (req, res) =>{
    try{
        const objeto = await Hilo.findOne({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const eliminarHilo = async (req, res) =>{
    try{
        const objeto = await Hilo.findByIdAndDelete({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.sendStatus(204);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const actualizarHilo = async (req, res) =>{
    try{
        const objeto = await Hilo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}