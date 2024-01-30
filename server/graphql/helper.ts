import { graphql } from '../axios';

export const graphQLRequest = (query: string, variables: unknown) =>
  graphql.post('/', {
    query,
    variables,
  });
