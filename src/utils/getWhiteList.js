import getEnv from './getEnv';

const frontEndpoints = getEnv('FRONT_ENDPOINTS', '');
const defaultWhitelist = [...frontEndpoints.split(',')];
const defaultMode = getEnv('NODE_ENV', 'production');

export default function getWhiteList(mode = defaultMode, whiteList = defaultWhitelist) {
  if (mode !== 'production') return whiteList;
  return whiteList.filter(ip => !ip.includes('localhost'));
}
