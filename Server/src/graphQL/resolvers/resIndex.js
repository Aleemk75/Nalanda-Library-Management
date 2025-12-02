import { authResolvers } from './auth.Resolver.js';
import { bookResolvers } from './book.resolver.js';
import { borrowingResolvers } from './borrow.resolver.js';
import { reportResolvers } from './report.resolver.js';

// Merge all resolvers
export const resolvers = {
    Query: {
        ...authResolvers.Query,
        ...bookResolvers.Query,
        ...borrowingResolvers.Query,
        ...reportResolvers.Query,
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...bookResolvers.Mutation,
        ...borrowingResolvers.Mutation,
    },
};