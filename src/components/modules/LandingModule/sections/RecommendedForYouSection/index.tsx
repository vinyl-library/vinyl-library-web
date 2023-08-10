import { useAuthContext } from '@contexts'
import { BookCard } from '@elements'
import React, { useEffect, useState } from 'react'
import { Book, MostPopularBooksResponse } from '../MostPopularSection/interface'

export const RecommendedForYouSection: React.FC = () => {
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([])
  const { httpRequest } = useAuthContext()

  const getRecommendedBooks = async () => {
    try {
      const response = await httpRequest<MostPopularBooksResponse>({
        method: 'get',
        path: 'api/book',
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
      data-aos-delay="600"
      className="flex flex-col gap-y-12 container mx-auto h-full bg-powder py-10 px-16 3xl:px-12"
    >
      <div className="flex justify-between font-bold">
        <h2 className="text-buff text-[30px] lg:text-[42px] 3xl:text-[54px]">
          Recommended For You
        </h2>
        <button className="text-bean text-[10px] lg:text-[22px] 3xl:text-[34px] hover:text-tiger hover:underline">
          See All
        </button>
      </div>

      <div className="flex overflow-auto gap-x-2 pb-6">
        {recommendedBooks.map((book) => (
          <BookCard
            key={book.id}
            author={book.author}
            title={book.title}
            genre={book.genre}
            rating={book.rating}
            coverUrl={book.coverUrl}
            bgColor="lace"
            detailLink={book.id} // later change to detail link
          />
        ))}
      </div>
    </section>
  )
}
