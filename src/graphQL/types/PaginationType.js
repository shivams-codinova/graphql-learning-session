import {ObjectTypeComposer} from "graphql-compose";
import {GraphQLNonNull, GraphQLInt} from "graphql";

export const PaginationType = ObjectTypeComposer.createTemp({
    name: 'PaginationMeta',
    fields: {
        total: new GraphQLNonNull(GraphQLInt),
        limit: new GraphQLNonNull(GraphQLInt),
        offset: new GraphQLNonNull(GraphQLInt)
    }
});
