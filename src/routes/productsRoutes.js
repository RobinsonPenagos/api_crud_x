import { Router } from "express";
import * as productsController from '../controllers/productsController'
const router = Router();

router.get('/', productsController.obtenerProductos)

router.get('/:id', productsController.obtenerProductosPorId)

router.post('/', productsController.crearProducto)

router.put('/:id', productsController.actualizarProductoPorId)

router.delete('/:id', productsController.eliminarProductoPorId)

export default router;