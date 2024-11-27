

import { 
    obtenerSuperHeroePorId, 
    obtenerTodosLosSuperHeroes, 
    buscarSuperHeroesPorPoderes, 
    obtenerSuperHeroesMayoresDe30, 
    buscarSuperHeroesPorAtributo
} from '../services/superheroesService.mjs';

import { renderizarSuperHeroe, renderizarListaSuperHeroes } from "../views/responseView.mjs";

// Controlador para obtener un superhéroe por su ID
export const obtenerSuperHeroePorIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const superheroe = await obtenerSuperHeroePorId(id);

        if (superheroe) {
            res.send(renderizarSuperHeroe(superheroe));
        } else {
            res.status(404).send({ mensaje: "Superhéroe no encontrado" });
        }
    } catch (error) {
        if (error.message === "ID no válido") {
            res.status(400).send({ mensaje: "ID proporcionado no es válido" });
        } else {
            res.status(500).send({ mensaje: "Error en el servidor", error: error.message });
        }
    }
};

// Controlador para obtener todos los superhéroes
export const obtenerTodosLosSuperHeroesController = async (req, res) => {
    try {
        const superheroes = await obtenerTodosLosSuperHeroes();
        if (superheroes) {
            res.send(renderizarListaSuperHeroes(superheroes));
        } else {
            res.status(404).send({ mensaje: "Superhéroes no encontrados" });
        }
    } catch (error) {
        res.status(500).send({ mensaje: "Error en el servidor", error: error.message });
    }
};

// Controlador para buscar superhéroes por poderes
export const buscarSuperHeroesPorPoderesController = async (req, res) => {
    const { poderes } = req.params;
    const { valor } = req.query;

    if (!valor) {
        return res.status(400).send({ mensaje: "Falta el valor para la búsqueda" });
    }

    try {
        const superheroes = await buscarSuperHeroesPorPoderes(poderes, valor);
        
        if (superheroes.length > 0) {
            res.send(renderizarListaSuperHeroes(superheroes));
        } else {
            res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
        }
    } catch (error) {
        res.status(500).send({ mensaje: "Error en el servidor", error: error.message });
    }
};

// Controlador para obtener superhéroes mayores de 30 años
export const obtenerSuperHeroesMayoresDe30Controller = async (req, res) => {
    try {
        const superheroes = await obtenerSuperHeroesMayoresDe30();
        if (superheroes.length > 0) {
            res.send(renderizarListaSuperHeroes(superheroes));
        } else {
            res.status(404).send({ mensaje: "Superhéroes no encontrados" });
        }
    } catch (error) {
        res.status(500).send({ mensaje: "Error en el servidor", error: error.message });
    }
};
export const buscarSuperHeroesPorAtributoController = async (req, res) => {
    const { atributo } = req.params; // Obtiene el atributo de la ruta
    const { valor } = req.query; // Obtiene el valor desde la query string

    if (!valor) {
        return res.status(400).json({ mensaje: "Se requiere un valor para buscar" });
    }

    try {
        const superheroes = await buscarSuperHeroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).json({ mensaje: "No se encontraron superhéroes con ese atributo" });
        }
        res.status(200).json(superheroes);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al buscar superhéroes", error: error.message });
    }
};
