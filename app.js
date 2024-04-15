const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./model/userModel');
const ModelOnu  = require('./model/onuModel');
const app = express();
const router = express.Router();

//Insert
router.post('/users', async (req, res)=>{
    const body = req.body
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

//Select ALL
router.get('/users', async (req, res)=>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
})

//Select WHERE
router.get('/users/:id', async (req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta)
})
//Update WHERE
router.put('/users/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body)
    res.send(respuesta)
})

//Select ALL onus
router.get('/onu/', async (req, res)=>{
    const respuesta = await ModelOnu.find({ estado: 1 })
    res.send(respuesta)
})

//Select WHERE
router.get('/onu/:id', async (req, res)=>{
    const id = req.params.id;
    // const respuesta = await ModelOnu.findById(id);
    const respuesta = await ModelOnu.findOne({ _id: id, estado: 1 });
    res.send(respuesta)
})
//Insert
router.post('/onu', async (req, res)=>{
    const body = req.body
    const respuesta = await ModelOnu.create(body)
    res.send(respuesta)
})
//Update WHERE
router.put('/onu/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelOnu.findOneAndUpdate({_id: id}, body)
    res.send(respuesta)
})



//
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());
app.use(router);

app.listen(3001, () =>{
    console.log(`El servidor está en el puerto 3001`);
})
dbconnect();

//https://www.youtube.com/watch?v=igcQhdMiECc&ab_channel=InfoCode19
/*
{
    "onu_id"             : 1,
    "hilo_id"            :21,
    "splitter_id"        :31,
    "geom"               :"{lat: -11.24142142, lon: -77.124521421}",
    "cliente_nombre"     :"cliente",
    "cliente_direccion"  :"Direccion",
    "velocidad_mb"       :200,
    "inicio_contrato"    :"02/05/2024",
    "monto_pago"         :149.90,
    "icono"              :"default"
}
*/
