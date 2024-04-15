const express = require('express');
const dbconnect = require('./config');
const ModelMufa = require('./model/mufaModel');
const ModelOnu  = require('./model/onuModel');
const app = express();
const router = express.Router();


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


//Insert
router.post('/mufa', async (req, res)=>{
    const body = req.body
    const respuesta = await ModelMufa.create(body)
    res.send(respuesta)
})

//Select ALL
router.get('/mufa', async (req, res)=>{
    const respuesta = await ModelMufa.find({})
    res.send(respuesta)
})

//Select WHERE
router.get('/mufa/:id', async (req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelMufa.findById(id)
    res.send(respuesta)
})
//Update WHERE
router.put('/mufa/:id', async (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelMufa.findOneAndUpdate({_id: id}, body)
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
