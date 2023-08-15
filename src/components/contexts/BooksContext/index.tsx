import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  Book,
  BooksContextInterface,
  BooksContextProviderProps,
  Genre,
  GetAllBooksResponseInterface,
  GetAllGenresResponseInterface,
  Pagination,
} from './interface'
import { useAuthContext } from '../AuthContext'

const BooksContext = createContext({} as BooksContextInterface)

export const useBooksContext = () => useContext(BooksContext)

export const BooksContextProvider: React.FC<BooksContextProviderProps> = ({
  children,
}) => {
  const { httpRequest } = useAuthContext()
  const [books, setBooks] = useState<Book[]>([])
  const [pagination, setPagination] = useState<Pagination>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [ratingMin, setRatingMin] = useState<number>(0)
  const [ratingMax, setRatingMax] = useState<number>(0)
  const [stock, setStock] = useState<string>('')
  const [orderBy, setOrderBy] = useState<string>('')

  const [keywordFilter, setKeywordFilter] = useState<string>('')

  const fetchBooks = async () => {
    console.log(`/api/book?page=${currentPage}&keyword=${keywordFilter}&stock=${stock}&genres=${selectedGenres}
    &ratingMin=${ratingMin}&ratingMax=${ratingMax}`)

    const { data } = await httpRequest<GetAllBooksResponseInterface>({
      method: 'get',
      path: `/api/book?page=${currentPage}&keyword=${keywordFilter}&stock=${stock}&genres=${selectedGenres}
              &ratingMin=${ratingMin}&ratingMax=${ratingMax}`,
    })

    const { books, pagination } = data

    setBooks(books)
    setPagination(pagination)
  }

  const fetchGenre = async () => {
    const { data } = await httpRequest<GetAllGenresResponseInterface>({
      method: 'get',
      path: '/api/genre',
    })

    const { genre } = data
    setGenres(genre)
  }
  useEffect(() => {
    fetchBooks(), fetchGenre()
  }, [currentPage, keywordFilter, genres])

  const contextValue = {
    books,
    pagination,
    setCurrentPage,
    setKeywordFilter,
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    ratingMin,
    setRatingMin,
    ratingMax,
    setRatingMax,
    stock,
    setStock,
    orderBy,
    setOrderBy,
  }

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  )
}
