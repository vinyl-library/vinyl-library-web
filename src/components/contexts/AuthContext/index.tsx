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
import { toast } from 'react-hot-toast'

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<User>()
  const router = useRouter()
  const protectedPath = ['/dashboard']
  const unauthenticatedOnlyPath = ['/login', '/register']

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
      if (unauthenticatedOnlyPath.includes(router.asPath)) {
        router.push('/')
      }
    } catch (err) {
      setIsLoggedIn(false)
      setUser(undefined)
      if (protectedPath.includes(router.asPath)) {
        router.push('/login')
      }
    }
  }

  const logout = async () => {
    try {
      await httpRequest({
        method: 'post',
        path: 'api/auth/logout',
      })
      toast.success('Successfully logout')
      setIsLoggedIn(false)
      setUser(undefined)
      router.push('/')
    } catch (err) {
      toast.error('Something wrong')
    }
  }

  const checkUser = async () => {
    await checkIsLoggedIn()
  }

  useEffect(() => {
    checkUser()
  }, [router.asPath])

  const contextValue = {
    httpRequest,
    checkIsLoggedIn,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    logout,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
