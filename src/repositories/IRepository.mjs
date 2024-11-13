class IRepository {
    obtenerPorId(id) {
        throw new Error("Metodo 'obtenerPorId()' no implementado");
    }
    
    obtenerTodos() {
        throw new Error("Metodo 'obtenerTodos()' no implementado");
    }

    buscarPorPoderes(poderes, valor) { // Cambiado de buscarPorAtributo a buscarPorPoderes
        throw new Error("Metodo 'buscarPorPoderes()' no implementado");
    }

    obtenerMayoresDe30() {
        throw new Error("Metodo 'obtenerMayoresDe30()' no implementado");
    }
}

export default IRepository;
