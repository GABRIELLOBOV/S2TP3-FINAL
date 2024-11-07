import express from 'express'; 
import { 
        obtenerSuperHeroePorIdController, 
        obtenerTodosLosSuperHeroesController, 
        buscarSuperHeroesPorPoderesController, 
        obtenerSuperHeroesMayoresDe30Controller, 
       }
        
       from '../controllers/superheroesController.mjs'; 
 
const router = express. Router(); 
router.get('/heroes', obtenerTodosLosSuperHeroesController );
router.get('/heroes/mayores-30', obtenerSuperHeroesMayoresDe30Controller);  
//router.get('/heroes/:id', obtenerSuperHeroePorIdController); 
//router.get('/heroes/buscar/:poderes', buscarSuperHeroesPorPoderesController);

export default router; 
