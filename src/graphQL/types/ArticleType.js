import {ObjectTypeComposer, GraphQLDate} from 'graphql-compose'
import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
import { AuthorType } from "./AuthorType.js";
import { query } from "../../db/Query.js";

// one bad way to do this 
// export const ArticleType = ObjectTypeComposer.createTemp({
//     name: 'Article',
//     fields: {
//         id: new GraphQLNonNull(GraphQLID),
//         title: new GraphQLNonNull(GraphQLString),
//         content: new GraphQLNonNull(GraphQLString),
//         createdAt: new GraphQLNonNull(GraphQLDate),
//         authorId: GraphQLID,
//         authorName: GraphQLString,
//         authorAvatar: GraphQLString,
//     }
// })

// another way to do this
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
                const author = await query(`Select * from Author where id = "${authorId}"`)
                return author[0];
            }
        }
    }
})
