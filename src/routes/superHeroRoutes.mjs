

import express from 'express';
import { 
    
    obtenerSuperHeroePorIdController, 
    obtenerTodosLosSuperHeroesController, 
    buscarSuperHeroesPorPoderesController, 
    obtenerSuperHeroesMayoresDe30Controller, 
    buscarSuperHeroesPorAtributoController,
    
} from '../controllers/superheroesController.mjs';

const router = express.Router();

// Rutas específicas primero
router.get('/heroes/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
router.get('/heroes/buscar/:poderes/:', buscarSuperHeroesPorPoderesController); // Ruta de búsqueda
router.get('/heroes/:id', obtenerSuperHeroePorIdController); // Ruta de ID después
router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/buscar/atributo/:atributo', buscarSuperHeroesPorAtributoController);


export default router;


