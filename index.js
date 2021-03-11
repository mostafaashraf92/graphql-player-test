
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type MediaItem {
    id: String
    name: String
    url: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    mediaItems: [MediaItem]
  }
`;
const mediaItems = [
  {
    id: '0',
    name: 'Sintel',
    url : 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
  },
  {
    id: '1',
    name: 'Big Buck Bunny',
    url : 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8',
  },
  {
    id: '3',
    name: 'Bip Bop',
    url : 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
  },
];

const resolvers = {
  Query: {
    mediaItems: () => mediaItems,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});