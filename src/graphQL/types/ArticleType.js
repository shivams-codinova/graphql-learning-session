import {ObjectTypeComposer, GraphQLDate} from 'graphql-compose'
import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
import { AuthorType } from "./AuthorType.js";

export const ArticleType = ObjectTypeComposer.createTemp({
    name: 'Article',
    fields: {
        id: new GraphQLNonNull(GraphQLID),
        title: new GraphQLNonNull(GraphQLString),
        content: new GraphQLNonNull(GraphQLString),
        createdAt: new GraphQLNonNull(GraphQLDate),
        author: {
            type: AuthorType,
            resolve : async (parent, args, context) => {
                const { authorId } = parent;
                const author = await context.services.author.getAuthorById(authorId)
                return author[0];
            }
        }
    }
})
