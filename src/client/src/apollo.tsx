import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: 'http://localhost:5000/graphql',
    credentials: 'include'
  })
})
