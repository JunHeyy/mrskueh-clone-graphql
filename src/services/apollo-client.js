
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { mockLink } from '../mocks/handler';

export const client = new ApolloClient({
    link: mockLink,
    cache: new InMemoryCache()
});

export default client;