import mongoose from 'mongoose';
const {collection} = mongoose;

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: [String],
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: [String],
    createdAt: [String],
    id: { type: Date, default: Date.now }
}, { collection: 'Grupo-12' });

// Modelo para el superhéroe // const SuperHero = mongoose.model('SuperHero', superheroSchema);

export default mongoose.model('SuperHero' , superheroSchema);

