import { RESTDataSource } from 'apollo-datasource-rest';
import { getEnv, normalizeFilters } from 'utils';

export default class TransactionAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = getEnv('MS_YOUTUBE');
  }

  searchByKeyword(filters) {
    return this.get(`/search`, normalizeFilters(filters));
  }
}
