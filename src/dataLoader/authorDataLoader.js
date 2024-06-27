import DataLoader from 'dataloader';

export const authorDataLoader = ({services}) => new DataLoader(async (authorIds) => {
    const authors = await services.author.getAuthorByIds(authorIds);
    return authorIds.map(authorId => authors.find(author => author.id === authorId) || null);
});

