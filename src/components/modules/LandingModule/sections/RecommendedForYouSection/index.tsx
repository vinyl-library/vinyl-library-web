import { useAuthContext } from '@contexts'
import { BookCard } from '@elements'
import React, { useEffect, useState } from 'react'
import { Book, MostPopularBooksResponse } from '../MostPopularSection/interface'
import Link from 'next/link'

export const RecommendedForYouSection: React.FC = () => {
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([])
  const { httpRequest } = useAuthContext()

  const getRecommendedBooks = async () => {
    try {
      const response = await httpRequest<MostPopularBooksResponse>({
        method: 'get',
        path: 'api/book/recommended',
      })
      setRecommendedBooks(response.data.books)
    } catch (err) {
      console.error('Error fetching popular books:', err)
    }
  }

  useEffect(() => {
    getRecommendedBooks()
  }, [])

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="500"
      className="flex flex-col gap-y-12 mx-auto h-full bg-powder py-12 px-16 3xl:px-24"
    >
      <div className="flex justify-between font-bold">
        <h2 className="text-buff text-[30px] lg:text-[42px] 3xl:text-[54px]">
          Recommended For You
        </h2>
        <Link
          href="/books"
          className="text-bean text-[10px] lg:text-[22px] 3xl:text-[34px] hover:text-tiger hover:underline"
        >
          See All
        </Link>
      </div>

      <div className="flex overflow-auto gap-x-2 2xl:gap-x-3 3xl:gap-x-4 pb-6">
        {recommendedBooks.map((book) => (
          <BookCard
            key={book.id}
            author={book.author}
            title={book.title}
            genre={book.genre}
            rating={book.rating}
            coverUrl={book.coverUrl}
            bgColor="lace"
            detailLink={`/detail/${book.id}`}
          />
        ))}
      </div>
    </section>
  )
}
