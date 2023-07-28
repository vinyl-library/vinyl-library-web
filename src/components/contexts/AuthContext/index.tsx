import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  AuthProviderProps,
  AuthContextProps,
  HttpRequestProps,
  User,
} from './interface'
import axios from 'axios'

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<User>()

  async function httpRequest<T>({ path, body, method }: HttpRequestProps) {
    const res = await axios({
      method,
      url: path,
      data: body,
      withCredentials: true,
    })
    return res.data as T
  }

  const checkIsLoggedIn = async () => {
    try {
      await httpRequest({ method: 'get', path: '/api/protected' })
      setIsLoggedIn(true)
    } catch (err) {
      setIsLoggedIn(false)
    }
  }

  useEffect(() => {
    checkIsLoggedIn()
  }, [])

  const contextValue = {
    httpRequest,
    checkIsLoggedIn,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
