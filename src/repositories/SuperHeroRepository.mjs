import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';
import mongoose from 'mongoose';

class SuperHeroRepository extends IRepository {
    // Implementación del método obtenerPorId con validación de ObjectId
    async obtenerPorId(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("ID no válido");
        }
        return await SuperHero.findById(id);
    }

    // Implementación del método obtenerTodos
    async obtenerTodos() {
        return await SuperHero.find();
    }
    // Implementacion del metodo buscarPorAtributo
    async buscarPorAtributo(atributo, valor) {
        const query = { [atributo]: new RegExp(valor, 'i') }; 
        return await SuperHero.find(query);
    }
    
    // Implementación del método buscarPorPoderes
    async buscarPorPoderes(poderes, valor) {
        const regex = new RegExp(valor, 'i'); // Expresión regular para búsqueda insensible a mayúsculas
        const query = { [poderes]: regex }; // Construcción dinámica de la consulta
        return await SuperHero.find(query);
    }

    // Implementación del método obtenerMayoresDe30
    async obtenerMayoresDe30() {
        return await SuperHero.find({
            edad: { $gt: 30 },
            planetaOrigen: 'Tierra',
            "poderes.1": { $exists: true } // Asegura que haya al menos dos poderes
        });
    }
}

export default new SuperHeroRepository();
