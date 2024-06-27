import {AuthorService} from "./AuthorService.js";
import {ArticleService} from "./ArticleService.js";

export function createServices() {
    return {
        article: new ArticleService(),
        author: new AuthorService()
    }
}