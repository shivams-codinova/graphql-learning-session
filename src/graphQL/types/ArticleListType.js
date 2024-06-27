import { ObjectTypeComposer } from "graphql-compose";
import { ArticleType } from "./ArticleType.js";
import { GraphQLInt } from "graphql";

export const ArticleListType = ObjectTypeComposer.createTemp({
  name: "ArticleList",
  fields: { node: ArticleType.NonNull.List.NonNull },
});

ArticleListType.addResolver({
  name: "getArticles",
  type: ArticleListType.NonNull,
  args: {
    limit: {
      type: GraphQLInt,
      defaultValue: 10
    },
    offset: {
      type: GraphQLInt,
      defaultValue: 0
    }
  },
  resolve: async ({source, args, context}) => {
    return {
      node: await context.services.article.getArticles(args),
    };
  },
});
