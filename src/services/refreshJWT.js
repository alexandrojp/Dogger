import { ENDPOINT } from '../settings'

export default function refreshJWT({ jwt }) {
  return fetch(`${ENDPOINT}/api-token-refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'token': jwt })
  })
    .then(response => {
      console.log(response)
      if (!response.ok) 
	throw new Error('Ocurrió un error al actualizar el JWT')
      return response.json()
    }).then(result => {
      const { token } = result
      return token
    })
}
