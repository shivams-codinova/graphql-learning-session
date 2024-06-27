import { ObjectTypeComposer } from "graphql-compose";
import { ArticleType } from "./ArticleType.js";
import { query } from "../../db/Query.js";

export const ArticleListType = ObjectTypeComposer.createTemp({
  name: "ArticleList",
  fields: { node: ArticleType.NonNull.List.NonNull },
});

// one bad way to do this
// ArticleListType.addResolver({
//   name: "getArticles",
//   type: ArticleListType.NonNull,
//   resolve: async () => {
//     return {
//       node: await query(
//         "Select Article.id, Article.title, Article.content, Article.createdAt, Article.authorId, Author.name as authorName, Author.avatar as authorAvatar  from Article left Join Author on Author.id = Article.authorId"
//       ),
//     };
//   },
// });

// another way 
ArticleListType.addResolver({
  name: "getArticles",
  type: ArticleListType.NonNull,
  resolve: async () => {
    return {
      node: await query(
        "Select * from Article limit 10"
      ),
    };
  },
});
