import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { listarOnus, 
        obtenerOnu, 
        crearOnu, 
        eliminarOnu, 
        actualizarOnu} from '../controllers/onuController.js';
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { crearOnuSchema } from "../schemas/onuSchema.js";

const router = Router()

// router.get('/onus', authRequired,listarOnus);
router.get('/onus/:id', authRequired,obtenerOnu);
router.post('/onus', authRequired, validateSchema(crearOnuSchema), crearOnu);
router.delete('/onus/:id', authRequired,eliminarOnu);
router.put('/onus/:id', authRequired,actualizarOnu);

router.get('/onus', listarOnus);

export default router;