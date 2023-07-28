import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  AuthProviderProps,
  AuthContextProps,
  HttpRequestProps,
  User,
  httpRequestGetUserInterface,
} from './interface'
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<User>()
  const router = useRouter()

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
      const res = await httpRequest<httpRequestGetUserInterface>({
        method: 'get',
        path: '/api/user',
      })
      console.log(res)
      setIsLoggedIn(true)
      setUser(res.data)
    } catch (err) {
      setIsLoggedIn(false)
      setUser(undefined)
    }
  }

  const checkUser = async () => {
    await checkIsLoggedIn()
    if(!user) {
      router.push('/login')
    }
  }
  useEffect(() => {
    checkUser()
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
