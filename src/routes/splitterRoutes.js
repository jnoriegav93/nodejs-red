import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { listarSplitters, 
        obtenerSplitter, 
        crearSplitter, 
        eliminarSplitter, 
        actualizarSplitter} from '../controllers/splitterController.js';
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { crearSplitterSchema } from "../schemas/splitterSchema.js";

const router = Router()

router.get('/splitters', authRequired,listarSplitters);
router.get('/splitters/:id', authRequired,obtenerSplitter);
router.post('/splitters', authRequired, validateSchema(crearSplitterSchema), crearSplitter);
router.delete('/splitters/:id', authRequired,eliminarSplitter);
router.put('/splitters/:id', authRequired,actualizarSplitter);

export default router;