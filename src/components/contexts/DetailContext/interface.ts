import { ReactNode } from 'react'

export interface DetailContextProviderProps {
  children: ReactNode
  book: Book
  wishlisted: boolean
  recommendations: Recommendation[]
}

export interface DetailContextProps {
  book: Book
  wishlisted: boolean
  recommendations: Recommendation[]
}

export type Genre = {
  name: string
}

export type Recommendation = {
  id: string
  title: string
  author: string
  rating: number
  genre: Genre[]
  coverUrl: string
}

export type Book = {
  id: string
  title: string
  author: string
  publisher: string
  publishDate: string
  pages: number
  stock: number
  description: string
  rating: number
  genre: Genre[]
  coverUrl: string
}
