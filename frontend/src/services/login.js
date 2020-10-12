const ENDPOINT = 'http://localhost:8000';

export default function login({ username, password }) {
  return fetch(`${ENDPOINT}/api-token-auth/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => response.json())
    .then(result => {
      const { token } = result;
      return token;
    })
    .catch(error => {
      throw new Error('Response is not OK')
    })
}