import { ReactNode } from 'react'

export interface BooksContextInterface {
  sortBy: string
  orderBy: string
  selectedGenres: string[]
  books: Book[]
  pagination?: Pagination
  setCurrentPage: (page: number) => void
  setKeywordFilter: (keyword: string) => void
  setSelectedGenres: (genre: string[]) => void
  setRatingMin: (rating: number) => void
  setRatingMax: (rating: number) => void
  setStock: (stock: string) => void
  setOrderBy: (orderBy: string) => void
  setSortBy: (sortBy: string) => void
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
  id: string
  name: string
}
export interface GetAllGenresResponseInterface {
  data: {
    genre: Genre[]
  }
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
