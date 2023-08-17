import { useAuthContext } from '@contexts'
import { BookCard } from '@elements'
import React, { useEffect, useState } from 'react'
import { Book, MostPopularBooksResponse } from './interface'

export const MostPopularSection: React.FC = () => {
  const [popularBooks, setPopularBooks] = useState<Book[]>([])
  const { httpRequest } = useAuthContext()

  const getMostPopularBooks = async () => {
    try {
      const response = await httpRequest<MostPopularBooksResponse>({
        method: 'get',
        path: 'api/book',
      })
      setPopularBooks(response.data.books)
    } catch (err) {
      console.error('Error fetching popular books:', err)
    }
  }

  useEffect(() => {
    getMostPopularBooks()
  }, [])

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="150"
      className="flex flex-col gap-y-12 h-full bg-lace py-12 px-16 3xl:px-24 w-full"
    >
      <div className="flex justify-between font-bold">
        <h2 className="text-buff text-[30px] lg:text-[42px] 3xl:text-[54px]">
          Most Popular
        </h2>
        <button className="text-bean text-[10px] lg:text-[22px] 3xl:text-[34px] hover:text-tiger hover:underline">
          See All
        </button>
      </div>

      <div className="flex overflow-auto gap-x-2 2xl:gap-x-3 3xl:gap-x-4 pb-6">
        {popularBooks.map((book) => (
          <BookCard
            key={book.id}
            author={book.author}
            title={book.title}
            genre={book.genre}
            rating={book.rating}
            coverUrl={book.coverUrl}
            bgColor="powder"
            detailLink={book.id} // later change to detail link
          />
        ))}
      </div>
    </section>
  )
}
