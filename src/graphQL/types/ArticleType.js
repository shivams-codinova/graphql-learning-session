import {ObjectTypeComposer, GraphQLDate} from 'graphql-compose'
import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';

export const ArticleType = ObjectTypeComposer.createTemp({
    name: 'Article',
    fields: {
        id: new GraphQLNonNull(GraphQLID),
        title: new GraphQLNonNull(GraphQLString),
        content: new GraphQLNonNull(GraphQLString),
        createdAt: new GraphQLNonNull(GraphQLDate),
    }
})
