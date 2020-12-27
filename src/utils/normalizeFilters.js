const normalizeFilters = params => params.map(({ field, value }) => [field, value]);
export default normalizeFilters;
