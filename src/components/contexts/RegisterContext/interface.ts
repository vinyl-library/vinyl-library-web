import { ReactNode } from 'react'

export interface RegisterContextProviderProps {
  children: ReactNode
  genre: Genre[]
}

export interface RegisterContextProps {
  genre: Genre[]
}

export type Genre = {
  id: string
  name: string
}
