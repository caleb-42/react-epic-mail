export const server = async (url = '', method = '', body = {}, resolve = (res) => { }, reject = (err) => { }, contentType = { 'Content-Type': 'application/json' }) => {
  body = JSON.stringify(body);
  const token = getUser();
  if (token) contentType['x-access-token'] = token;
  const payload = {
    method,
    headers: contentType,
  };
  if (method !== 'GET') payload.body = body;
  if (contentType === null) delete payload.headers;
  const endpoint = `${process.env.APP_URL}${url}`;
  // eslint-disable-next-line no-undef
  await fetch(endpoint, payload)
    .then(resp => resp.json())
    .then((res) => {
      setTimeout(() => { resolve(res); }, 0);
    }).catch((err) => {
      reject(err);
    });
};

export const storeUser = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
}

export const getUser = () => {
  const user = localStorage.getItem('user');
  try {
    const userObj = JSON.parse(user);
    return userObj.token;
  } catch (e) {
    return null;
  }
}