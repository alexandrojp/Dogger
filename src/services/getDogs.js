import { ENDPOINT } from '../settings'

export default function getDogs({ jwt }) {
  return fetch(`${ENDPOINT}/api/dogs`, {
      headers: {
        Authorization: `JWT ${jwt}`,
      },
    })
      .then((response) => {
	if(!response.ok) throw new Error('Error to get all my dogs')
	return response.json()
      })
}

