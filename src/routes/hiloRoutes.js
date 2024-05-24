import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { listarHilos, 
        obtenerHilo, 
        crearHilo, 
        eliminarHilo, 
        actualizarHilo} from '../controllers/hiloController.js';
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { crearHiloSchema } from "../schemas/hiloSchema.js";

const router = Router()

//router.get('/hilos', authRequired,listarHilos);
router.get('/hilos/:id', authRequired,obtenerHilo);
router.post('/hilos', authRequired, validateSchema(crearHiloSchema), crearHilo);
router.delete('/hilos/:id', authRequired,eliminarHilo);
router.put('/hilos/:id', authRequired,actualizarHilo);

router.get('/hilos', listarHilos);

export default router;
