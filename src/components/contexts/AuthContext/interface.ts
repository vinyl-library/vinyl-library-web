import { ReactNode } from 'react'

export interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContextProps {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
  user?: User
  httpRequest: <T>(props: HttpRequestProps) => Promise<T>
}

export interface HttpRequestProps {
  path: string
  body?: any
  method: 'post' | 'get' | 'patch' | 'delete'
}

export type User = {
  name: string
  username: string
  fine: number
}
