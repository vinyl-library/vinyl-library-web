import React from 'react'
import { BooksModule } from '@modules'
import type { NextPage } from 'next'
import { BooksContextProvider } from '@contexts'

const Books: NextPage = () => {
  return (
    <BooksContextProvider>
      <BooksModule />
    </BooksContextProvider>
  )
}

export default Books
