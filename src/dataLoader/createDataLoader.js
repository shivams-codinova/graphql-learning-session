import { authorDataLoader } from "./authorDataLoader.js"

export const createDataLoader = (services) => {
    return {
        authorDataLoader: authorDataLoader({services})
    }
}

export default createDataLoader