import React, { useState } from 'react'
import refreshJWT from '../services/refreshJWT'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem('jwt')
  )

  const reloadJWT = () => {
    refreshJWT({ jwt })
      .then(result => {
	setJWT(result)
      })
      .catch(error => {
	console.error(`Error when refresh JWT: ${error}`)
	window.sessionStorage.removeItem('token')
	setJWT(null)
      })
  }

  return <Context.Provider value={{
      jwt,
      setJWT,
      reloadJWT
  }}>
    {children}
  </Context.Provider>
}

export default Context
