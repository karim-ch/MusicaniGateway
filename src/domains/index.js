import { gql } from 'apollo-server-express';
import { merge, isArray } from 'lodash';

import Youtube from './Youtube';

const domains = [Youtube];

const root = gql`
  input Filter {
    field: String
    value: String
    operator: String
  }
`;

const rootResolvers = {
  // will be used later
};

export default {
  typeDefs: [root, ...domains.map(({ schema }) => schema)],
  resolvers: domains.reduce((acc, { resolvers }) => merge({}, acc, resolvers), rootResolvers),
  dataSources: () =>
    merge(
      domains
        .filter(({ dataSource }) => dataSource)
        .reduce((acc, { dataSource }) => {
          if (isArray(dataSource))
            return {
              ...acc,
              ...dataSource.reduce(
                (accumulator, { key, value: DataSource }) => ({
                  ...accumulator,
                  [key]: new DataSource(),
                }),
                {},
              ),
            };
          const { key, value: DataSource } = dataSource;
          return { ...acc, [key]: new DataSource() };
        }, {}),
    ),
  playground: {
    settings: {
      'request.credentials': 'include',
    },
  },
};
