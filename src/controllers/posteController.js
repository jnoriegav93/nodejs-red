import Poste from '../models/posteModel.js';

export const listarPostes = async (req, res) =>{
    try{
        // const postes = await Poste.find({ usuario: req.user.id, estado: 1 });
        // const postes = await Poste.find({ estado: 1 });
        const postes = await Poste.find({});
        res.json(postes);

    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const crearPoste = async (req, res) =>{
    try{
        const {
            geom,
            codigo,
            propietario,
            tipo,
            material,
            f12,
            f12b,
            f24,
            f24b,
            f48,
            f48b,
            f96,
            f96b,
            f144,
            f144b,
            icono
        } = req.body;
        const nuevo = new Poste({
            geom,
            codigo,
            propietario,
            tipo,
            material,
            f12,
            f12b,
            f24,
            f24b,
            f48,
            f48b,
            f96,
            f96b,
            f144,
            f144b,
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
export const obtenerPoste = async (req, res) =>{
    try{
        const objeto = await Poste.findOne({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const eliminarPoste = async (req, res) =>{
    try{
        const objeto = await Poste.findByIdAndDelete({ _id: req.params.id, estado: 1 });
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.sendStatus(204);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
export const actualizarPoste = async (req, res) =>{
    try{
        const objeto = await Poste.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!objeto) return res.status(400).json({ error: 'No se encontraron datos' });
        res.json(objeto);
    }catch(error){
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
}
