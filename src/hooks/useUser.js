import { useCallback, useContext } from 'react'
import loginService from '../services/login'

export default function useUser() {
  const { jwt, setJWT } = useContext();

  const login = useCallback(({ username, password }) => {
    loginService({ username, password })
      .then(token => {
        setJWT(token)
      })
      .catch(err => console.error(err))
  }, [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  }
}