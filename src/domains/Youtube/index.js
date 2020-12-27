import schema from './youtube.schema';
import resolvers from './youtube.resolvers';
import DataSource from './youtube.providers';

export default {
  schema,
  resolvers,
  dataSource: { key: 'youtubeAPI', value: DataSource },
};
