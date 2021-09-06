
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type ImageItem {
      url: String,
      type: String
      description: String
      width: Int
      height: Int
    }

    type StreamItem {
      format: String,
      container: String
      fps: Float
      drm: String
      segmentDuration: Int
      videoInfo: [VideoInfoItem]
      audioInfo: [AudioInfoItem]
      textInfo: [TextInfoItem]
      sources: [SourceItem]
    }

    type VideoInfoItem {
      id: Int,
      codec: String
      bitrate: Int
      width: Int
      height: Int
      bitDepth: Int
    }

    type AudioInfoItem {
      id: Int,
      codec: String
      language: String
      bitRate: Int
      channels: Int
    }

    type TextInfoItem {
      id: String,
      type: String
      language: String
    }
    type SourceItem {
      cdn: String,
      url: String
    }
    
  type MediaItem {
    id: String
    title: String
    description: String
    duration: Float
    images: [ImageItem]
    streams: [StreamItem]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    MediaList: [MediaItem]
  }
`;
const mediaItems = [
  {
    id: '0',
    title: 'Sintel',
    description: 'A video',
    duration: 630,
    images: [
      {
        url: 'http://placehold.it/640x360?text=Sintel',
        type: 'poster',
        description: 'A video',
        width: 1280,
        height: 720
      }
    ],
    streams: [
      {
         format:'hls',
         container:'cmaf',
         fps:59.97,
         drm:'cbcs',
         segmentDuration:2,
         videoInfo:[
            {
               id:1,
               codec:'h265',
               bitrate:400000,
               width:1920,
               height:1080,
               bitDepth:8
            }
         ],
         audioInfo:[
            {
               id:2,
               codec:'aac',
               language:'en',
               bitRate:4000,
               channels:6
            }
         ],
         textInfo:[
            {
               id:'CC1',
               type:'cea-608',
               language:'en'
            }
         ],
         sources:[
            {
               cdn:'Akamai',
               url:'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
            },
            {
               cdn:'Fastly',
               url:'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
            }
         ]
      },
      {
         format:'dash',
         container:'cmaf',
         fps:29.97,
         drm:'clear',
         segmentDuration:2,
         videoInfo:[
            {
               id:1,
               codec:'h264',
               bitrate:300000,
               width:1280,
               height:720,
               bitDepth:8
            }
         ],
         audioInfo:[
            {
               id:2,
               codec:'aac',
               language:'en',
               bitRate:4000,
               channels:2
            }
         ],
         textInfo:[
            {
               id:'CC1',
               type:'cea-608',
               language:'en'
            }
         ],
         sources:[
            {
               cdn:'Akamai',
               url:'https: //some.akamai.com/blah.mpd'
            },
            {
               cdn:'Fastly',
               url:'https: //some.fastly.com/blah.mpd'
            }
         ]
      }
   ]
    
  },
  {
    id: '1',
    title: 'Big Buck Bunny',
    description: 'A video',
    duration: 630,
    images: [
      {
        url: 'http://placehold.it/640x360?text=Big Buck Bunny',
        type: 'poster',
        description: 'A video',
        width: 1280,
        height: 720
      }
    ],
    streams: [
      {
         format:'hls',
         container:'cmaf',
         fps:59.97,
         drm:'cbcs',
         segmentDuration:2,
         videoInfo:[
            {
               id:1,
               codec:'h265',
               bitrate:400000,
               width:1920,
               height:1080,
               bitDepth:8
            }
         ],
         audioInfo:[
            {
               id:2,
               codec:'aac',
               language:'en',
               bitRate:4000,
               channels:6
            }
         ],
         textInfo:[
            {
               id:'CC1',
               type:'cea-608',
               language:'en'
            }
         ],
         sources:[
            {
               cdn:'Akamai',
               url:'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'
            },
            {
               cdn:'Fastly',
               url:'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'
            }
         ]
      },
      {
         format:'dash',
         container:'cmaf',
         fps:29.97,
         drm:'clear',
         segmentDuration:2,
         videoInfo:[
            {
               id:1,
               codec:'h264',
               bitrate:300000,
               width:1280,
               height:720,
               bitDepth:8
            }
         ],
         audioInfo:[
            {
               id:2,
               codec:'aac',
               language:'en',
               bitRate:4000,
               channels:2
            }
         ],
         textInfo:[
            {
               id:'CC1',
               type:'cea-608',
               language:'en'
            }
         ],
         sources:[
            {
               cdn:'Akamai',
               url:'https: //some.akamai.com/blah.mpd'
            },
            {
               cdn:'Fastly',
               url:'https: //some.fastly.com/blah.mpd'
            }
         ]
      }
   ]
  },
  {
    id: '2',
    title: 'Bip Bop',
    description: 'A video',
    duration: 630,
    images: [
      {
        url: 'http://placehold.it/640x360?text=Bip_Bop',
        type: 'poster',
        description: 'A video',
        width: 1280,
        height: 720
      }
    ],
    streams: [
      {
         format:'dash',
         container:'cmaf',
         fps:59.97,
         drm:'cbcs',
         segmentDuration:2,
         videoInfo:[
            {
               id:1,
               codec:'h265',
               bitrate:400000,
               width:1920,
               height:1080,
               bitDepth:8
            }
         ],
         audioInfo:[
            {
               id:2,
               codec:'aac',
               language:'en',
               bitRate:4000,
               channels:6
            }
         ],
         textInfo:[
            {
               id:'CC1',
               type:'cea-608',
               language:'en'
            }
         ],
         sources:[
            {
               cdn:'Akamai',
               url:'https://storage.googleapis.com/shaka-live-assets/player-source.mpd'
            },
            {
               cdn:'Fastly',
               url:'https://storage.googleapis.com/shaka-live-assets/player-source.mpd'
            }
         ]
      }
   ]
  },
];



const resolvers = {
  Query: {
    MediaList: () => mediaItems,
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