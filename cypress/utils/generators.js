export const randomEmail = () => {
  const timestamp = Date.now();
  return `test${timestamp}@example.com`;
};