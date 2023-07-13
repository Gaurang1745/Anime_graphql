import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphql.anilist.co', // Replace with your GraphQL API endpoint
    }),
    cache: new InMemoryCache(),
  });
  export default client;
