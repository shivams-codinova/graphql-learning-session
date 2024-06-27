import createDataLoader from '../dataLoader/createDataLoader.js'

export function createContext(services) {
    return {
        services,
        dataLoader: createDataLoader(services) 
    };
}

