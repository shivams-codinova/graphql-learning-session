import { ObjectTypeComposer } from "graphql-compose";
import { ArticleType } from "./ArticleType.js";
import { GraphQLInt } from "graphql";

export const ArticleListType = ObjectTypeComposer.createTemp({
  name: "ArticleList",
  fields: {
    nodes: ArticleType.NonNull.List.NonNull,
  },
});

ArticleListType.addResolver({
  name: "getArticles",
  type: ArticleListType.NonNull,
  resolve: () => {
    return {
      nodes: [
        {
          id: "1234NHJEE45",
          title: "Article Title",
          content: "Article Content",
          createdAt: new Date(),
        },
      ],
    };
  },
});
