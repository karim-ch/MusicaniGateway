export default {
  Query: {
    async searchByKeyword(_, { filters }, { dataSources: { youtubeAPI } }) {
      return youtubeAPI.searchByKeyword(filters);
    },
  },
};
