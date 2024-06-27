import { query } from "../db/Query.js"

export class ArticleService {
    async getArticles({limit, offset}) {
        return query( `Select * from Article limit ${limit} offset ${offset}`);
    }

    async getTotalCount() {
        return query('Select count(id) as count from Article')
    }
}