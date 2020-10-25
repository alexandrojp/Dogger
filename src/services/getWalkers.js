import { ENDPOINT } from '../settings'

export default function getWalkers({ jwt }) {
  return fetch(`${ENDPOINT}/api/walkers`, {
      headers: {
        Authorization: `JWT ${jwt}`,
      },
    })
      .then((response) => {
	if (!response.ok) throw new Error('Response is not OK')
	return response.json()
      })
}
