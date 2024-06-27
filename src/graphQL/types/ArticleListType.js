import { ObjectTypeComposer } from "graphql-compose";
import { ArticleType } from "./ArticleType.js";
import { query } from "../../db/Query.js";

export const ArticleListType = ObjectTypeComposer.createTemp({
  name: "ArticleList",
  fields: ArticleType.NonNull.List.NonNull,
});

ArticleListType.addResolver({
  name: "getArticles",
  type: ArticleListType.NonNull,
  resolve: async () => {
    return await query("Select * from Article")
  },
});
