import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { listarPostes, 
        obtenerPoste, 
        crearPoste, 
        eliminarPoste, 
        actualizarPoste} from '../controllers/posteController.js';
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { crearPosteSchema } from "../schemas/posteSchema.js";

const router = Router()

router.get('/postes', authRequired,listarPostes);
router.get('/postes/:id', authRequired,obtenerPoste);
router.post('/postes', authRequired, validateSchema(crearPosteSchema), crearPoste);
router.delete('/postes/:id', authRequired,eliminarPoste);
router.put('/postes/:id', authRequired,actualizarPoste);

export default router;