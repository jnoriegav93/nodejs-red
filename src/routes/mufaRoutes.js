import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { listarMufas, 
        obtenerMufa, 
        crearMufa, 
        eliminarMufa, 
        actualizarMufa} from '../controllers/mufaController.js';
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { crearMufaSchema } from "../schemas/mufaSchema.js";

const router = Router()

router.get('/mufas', authRequired,listarMufas);
router.get('/mufas/:id', authRequired,obtenerMufa);
router.post('/mufas', authRequired, validateSchema(crearMufaSchema), crearMufa);
router.delete('/mufas/:id', authRequired,eliminarMufa);
router.put('/mufas/:id', authRequired,actualizarMufa);

export default router;