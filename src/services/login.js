import { ENDPOINT } from '../settings'

export function login({ username, password }) {
  return fetch(`${ENDPOINT}/api-token-auth/`, {
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    redirect: 'follow',
  })
    .then((response) => {
      if (!response.ok) throw new Error('Response is not OK')
      return response.json()
    })
    .then((result) => {
      const { token } = result
      return token
    })
}
