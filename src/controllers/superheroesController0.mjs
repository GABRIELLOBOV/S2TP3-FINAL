import { obtenerSuperHeroePorIdController, obtenerSuperHeroePorId, obtenerTodosLosSuperHeroes, buscarSuperHeroesPorPoderes, obtenerSuperHeroesMayoresDe30 } 
    
    from '../services/superheroesService.mjs'; 

    import { renderizarSuperHeroe, renderizarListaSuperHeroes } 
    from "../views/responseView.mjs";

    export const obtenerSuperHeroePorIdController = async (req, res) => {
        const {id} = req.params;
        const superheroe = await obtenerSuperHeroePorId(id);
    
        if(superheroe){
            res.send(renderizarSuperHeroe(superheroe));
        } else {
            res.status(404).send({mensaje: "superheroe no encontrado"});
        }
    }

    export const obtenerTodosLosSuperHeroesController = async (req, res) => {
        const superheroes = await obtenerTodosLosSuperHeroes();
        if(superheroes){
            res.send(renderizarListaSuperHeroes(superheroes));
        } else {
            res.status(404).send({mensaje: "Superheroes no encontrados"});
        }
    }
    /*export async function obtenerTodosLosSuperheroesController (req, res) 
    { 
        const superheroes = await obtenerTodosLosSuperheroes(); 
        res.send(renderizarListaSuperheroes (superheroes)); 
    } */
    
    export async function buscarSuperHeroesPorPoderesController (req, res) 
    { 
    const { Poderes, valor } = req.params; 
    const superheroes = await buscarSuperHeroesPorPoderes (Poderes, valor); 
        if (superheroes.length > 0)
             { 
                res.send(renderizarListaSuperHeroes (superheroes)); 
             }
             
        else 
             { 
                res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" }) 
               
             } 
} 
      /*  export async function obtenerSuperheroesMayoresDe30Controller (req, res) 
        { 
            const superheroes = await obtenerSuperheroesMayoresDe30(); 
            res.send(renderizarListaSuperheroes (superheroes)); 

        } */

        export const buscarHeroesPorPoderesController = async (req, res) => {
               
                const {Poderes, valor} = req.query; 
                const superheroes = await buscarHeroesPorPoderes(Poderes, valor);
            
                if(superheroes.length > 0) {
                    res.send(renderizarListaSuperHeroes(superheroes));
                } else {
                    res.status(404).send({mensaje: "no se encontraron superheroes con ese atributo"});
                }
            }
            
            export const obtenerMayoresDe30Controller = async (req, res) => {
                const superheroes = await obtenerSuperHeroesMayoresDe30();
                if(superheroes){
                    res.send(renderizarListaSuperHeroes(superheroes));
                } else {
                    res.status(404).send({mensaje: "superheros no encontrados"});
                }
            }
