export const server = (url = '', method = '', body = {}) => {
  body = JSON.stringify(body);
  const contentType = { 'Content-Type': 'application/json' };
  const { token } = getUser();
  if (token) contentType['x-auth-token'] = token;
  const payload = {
    method,
    headers: contentType,
  };
  if (method !== 'GET') payload.body = body;
  const endpoint = `${process.env.APP_URL}${url}`;
  return fetch(endpoint, payload)
    .then(resp => resp.json())
};

export const storeUser = (data) => {
  localStorage.setItem('user', JSON.stringify(data[0]));
}

export const getUser = () => {
  const user = localStorage.getItem('user');
  try {
    const userObj = JSON.parse(user);
    return userObj || { token: '' };
  } catch (e) {
    return { token: '' };
  }
}