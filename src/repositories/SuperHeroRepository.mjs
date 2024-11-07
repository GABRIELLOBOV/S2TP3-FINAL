
import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';
import mongoose from "mongoose";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
        }
    async obtenerTodos() {
        return await SuperHero.find();
    }    
    async obtenerPorPoderes (Poderes, valor) {
        const query = ['nombreSuperHeroe', 'nombreReal', 'edad', 'planetaOrigen', 'debilidad', 'poderes', 'aliados', 'enemigos', 'creador', 'createAt', 'id']; new RegExp(valor, 'i') ;

        
        return await SuperHero.find(query);
    }
    async obtenerMayoresDe30() {
        return await SuperHero.find({
            edad: { $gt: 30 },
            planetaOrigen: 'Tierra',
            "poderes.1": { $exists: true }
        });
    }
    
    
}
export default new SuperHeroRepository();


