import {
  ApolloClient,
  concat,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import resolvers from '@Graphql/client/resolvers'
import { authLink } from './auth'

const httpLink = createHttpLink({ uri: 'http://178.128.243.119:7000/graphql' })

const cache = new InMemoryCache()

const data = { isLoggedIn: false }

cache.writeData({ data })

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache,
  resolvers,
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
})

client.onResetStore(async () => cache.writeData({ data }))

export default client
