const urlSerializer = (url) => {
  const param = new URLSearchParams();
  param.set('BASE_URL', url);
  return param;
};

// eslint-disable-next-line import/prefer-default-export
export { urlSerializer };
