import { ReactNode } from 'react'

export interface DetailContextProviderProps {
  children: ReactNode
  book: Book
}

export interface DetailContextProps {
  book: Book
}

export interface GetBookResponseInterface {
  data: {
    book: Book
    recommendations: Recommendation[]
  }
}

export type Genre = {
  name: string
}

export type Recommendation = {
  id: string
  title: string
  author: string
  rating: string
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
  wishlisted: boolean
  genre: Genre[]
  coverUrl: string
}
