import { useBooksContext } from '@contexts'
import { BookCard } from '@elements'
import React, { useState } from 'react'
// import {HeroSection, FAQSection} from './sections
// import {} from './module-elements'

export const BooksModule: React.FC = () => {
  const { books, pagination, setCurrentPage, setKeywordFilter } =
    useBooksContext()
  const [keywordInput, setKeywordInput] = useState<string>('')

  return (
    <>
      <input
        className="text-black"
        onChange={(e) => {
          setKeywordInput(e.target.value)
        }}
        type="text"
        onKeyDown={(e) => {
          if (e.key === 'Enter') setKeywordFilter(keywordInput)
        }}
      />
      {books.map((book, index) => {
        return <BookCard {...book} key={index} bgColor="white" detailLink="" />
      })}
      <div className="flex flex-col">
        <span className="text-black">Page {pagination?.page}</span>
        <button
          className="text-black"
          onClick={() => {
            if (pagination && pagination.page < pagination.totalPage) {
              setCurrentPage(pagination.page + 1)
            }
          }}
        >
          Next Page
        </button>
        <button
          className="text-black"
          onClick={() => {
            if (pagination && pagination.page > 1) {
              setCurrentPage(pagination.page - 1)
            }
          }}
        >
          Previous Page
        </button>
      </div>
    </>
  )
}
