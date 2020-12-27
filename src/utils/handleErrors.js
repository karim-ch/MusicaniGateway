export default function handleErrors({ error, overrides }) {
  const {
    response: {
      status,
      statusText,
      body: { message },
    },
  } = error.extensions;
  return {
    error: {
      code: status,
      message: message || statusText,
      ...overrides,
    },
  };
}
