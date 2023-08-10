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
  const [keywordFilter, setKeywordFilter] = useState<string>('')

  const fetchBooks = async () => {
    const { data } = await httpRequest<GetAllBooksResponseInterface>({
      method: 'get',
      path: `/api/book?page=${currentPage}&keyword=${keywordFilter}`,
    })

    const { books, pagination } = data

    setBooks(books)
    setPagination(pagination)
  }

  useEffect(() => {
    fetchBooks()
  }, [currentPage, keywordFilter])

  const contextValue = { books, pagination, setCurrentPage, setKeywordFilter }

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  )
}
