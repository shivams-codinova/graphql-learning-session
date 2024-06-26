import { GraphQLID, GraphQLString } from "graphql";
import {GraphQLDate, ObjectTypeComposer} from "graphql-compose";

export const AuthorType = ObjectTypeComposer.createTemp({
    name: "Author",
    fields: {
        id: GraphQLID,
        name: GraphQLString,
        avatar: GraphQLString,
        createdAt: GraphQLDate,
    }
})
