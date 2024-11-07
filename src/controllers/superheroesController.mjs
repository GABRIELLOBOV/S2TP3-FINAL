import { obtenerSuperHeroePorId, obtenerTodosLosSuperHeroes, buscarSuperHeroesPorPoderes, obtenerSuperHeroesMayoresDe30, } 
from '../services/superheroesService.mjs';

import { renderizarSuperHeroe, renderizarListaSuperHeroes } 
from "../views/responseView.mjs";

// Controlador para obtener un superhéroe por su ID
export const obtenerSuperHeroePorIdController = async (req, res) => {
    const { id } = req.params;
    const superheroe = await obtenerSuperHeroePorId(id);

    if (superheroe) {
        res.send(renderizarSuperHeroe(superheroe));
    } else {
        res.status(404).send({ mensaje: "superheroe no encontrado" });
    }
};

// Controlador para obtener todos los superhéroes
export const obtenerTodosLosSuperHeroesController = async (req, res) => {
    const superheroes = await obtenerTodosLosSuperHeroes();
    if (superheroes) {
        res.send(renderizarListaSuperHeroes(superheroes));
    } else {
        res.status(404).send({ mensaje: "Superheroes no encontrados" });
    }
};

// Controlador para buscar superhéroes por un atributo específico 
export const buscarSuperHeroesPorPoderesController = async (req, res) => {
    const { Poderes, valor } = req.params;
    const superheroes = await buscarSuperHeroesPorPoderes(Poderes, valor);

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperHeroes(superheroes));
    } else {
        res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
    }
};

// Controlador para obtener superhéroes mayores de 30 años
export const obtenerSuperHeroesMayoresDe30Controller = async (req, res) => {
    const superheroes = await obtenerSuperHeroesMayoresDe30();
    if (superheroes.length > 0) {
        res.send(renderizarListaSuperHeroes(superheroes));
    } else {
        res.status(404).send({ mensaje: "superhéroes no encontrados" });
    }
};
