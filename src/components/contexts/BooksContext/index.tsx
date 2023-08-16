import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  Book,
  BooksContextInterface,
  BooksContextProviderProps,
  GetAllBooksResponseInterface,
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
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [ratingMin, setRatingMin] = useState<number>(0)
  const [ratingMax, setRatingMax] = useState<number>(5)
  const [stock, setStock] = useState<string>('available')
  const [orderBy, setOrderBy] = useState<string>('asc')
  const [sortBy, setSortBy] = useState<string>('title')
  const [keywordFilter, setKeywordFilter] = useState<string>('')

  const fetchBooks = async () => {
    console.log(
      `/api/book?page=${currentPage}&keyword=${keywordFilter}&stock=${stock}&genres=${selectedGenres}&ratingMin=${ratingMin}&ratingMax=${ratingMax}&orderBy=${orderBy}&sortBy=${sortBy}`
    )
    const { data } = await httpRequest<GetAllBooksResponseInterface>({
      method: 'get',
      path: `/api/book?page=${currentPage}&keyword=${keywordFilter}&stock=${stock}&genres=${selectedGenres}&ratingMin=${ratingMin}&ratingMax=${ratingMax}&orderBy=${orderBy}&sortBy=${sortBy}`,
    })

    const { books, pagination } = data

    setBooks(books)
    setPagination(pagination)
  }

  useEffect(() => {
    fetchBooks()
  }, [
    currentPage,
    keywordFilter,
    selectedGenres,
    stock,
    ratingMin,
    ratingMax,
    orderBy,
    sortBy,
  ])

  const contextValue = {
    books,
    pagination,
    setCurrentPage,
    setKeywordFilter,
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
    sortBy,
    setSortBy,
  }

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  )
}
