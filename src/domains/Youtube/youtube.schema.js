import { gql } from 'apollo-server-express';

export default gql`
  type videoID {
    videoId: ID
    kind: String
  }

  type Thumbnail {
    url: String
    width: Int
    height: Int
  }
  type Thumbnails {
    default: Thumbnail
    medium: Thumbnail
    high: Thumbnail
  }

  type Video {
    kind: String
    etag: String
    id: videoID
    publishedAt: String
    channelId: ID
    title: String
    description: String
    thumbnails: Thumbnails
    channelTitle: String
    publishTime: String
  }

  type Query {
    searchByKeyword(filters: [Filter] = []): [Video]
  }
`;
