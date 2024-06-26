import {SchemaComposer} from "graphql-compose";
import {ArticleListType} from "./types/ArticleListType.js";

export function createSchema() {
    const composer = new SchemaComposer();

    composer.Query.addFields({
        articleList: ArticleListType.getResolver('getArticles'),
    })

    return composer.buildSchema();
}