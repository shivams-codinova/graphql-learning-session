import { query } from "../db/Query.js"

export class AuthorService {

    async getAuthors({limit, offset}) {
        return query( `Select * from Author limit ${limit} offset ${offset}`);
    }

    async getAuthorById(id) {
        return query( `Select * from Author where id = "${id}"`);
    }

}