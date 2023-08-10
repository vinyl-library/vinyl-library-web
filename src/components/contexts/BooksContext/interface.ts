import { ReactNode } from 'react'

export interface BooksContextInterface {
  books: Book[]
  pagination?: Pagination
  setCurrentPage: (page: number) => void
  setKeywordFilter: (keyword: string) => void
}

export interface BooksContextProviderProps {
  children: ReactNode
}

export type Book = {
  id: string
  title: string
  author: string
  rating: number
  genre: Genre[]
  coverUrl: string
}

export type Genre = {
  name: string
}

export interface GetAllBooksResponseInterface {
  data: {
    books: Book[]
    pagination: Pagination
  }
}

export type Pagination = {
  page: number
  from: number
  to: number
  total: number
  totalPage: number
}
