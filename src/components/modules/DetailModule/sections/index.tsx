import { useDetailContext } from '@contexts'
import Image from 'next/image'
import { BsDot, BsCheckLg } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { HiOutlinePlus } from 'react-icons/hi'
import { useState } from 'react'
import { BookCard } from '@elements'

export const DetailSection: React.FC = () => {
  const { book, wishlisted, recommendations } = useDetailContext()
  const [expanded, setExpanded] = useState(false)

  const toggleDescription = () => {
    setExpanded(!expanded)
  }

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-12 3xl:gap-12">
        <div className="flex gap-x-12 3xl:gap-x-20">
          <div>
            <Image
              src={book.coverUrl}
              alt="img"
              width={300}
              height={300}
              className="shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-y-4 3xl:gap-y-6 pl-6">
            <span className="flex italic text-black/60 3xl:text-xl xl:text-lg text-base">
              {book.author}
            </span>
            <span className="flex font-bold text-bean 3xl:text-3xl xl:text-2xl text-xl">
              {book.title}
            </span>
            <div className="flex gap-2">
              {book.genre.map((g, index) => {
                return (
                  <div
                    key={index}
                    className="bg-crayola rounded-full text-[10px] lg:text-[14px] 3xl:text-[16px] font-semibold px-2 py-1"
                  >
                    {g.name}
                  </div>
                )
              })}
            </div>
            <div className="flex gap-x-2 items-center text-[12px] lg:text-[16px] 3xl:text-[18px] text-black">
              <span>
                {book.stock === 0 ? 'Not Available' : `Available ${book.stock}`}
              </span>
              <BsDot color="black" size="25" />
              <div className="flex gap-1 items-center text-[12px] lg:text-[16px] 3xl:text-[18px] text-black">
                <AiFillStar size="20" color="black" />
                <span>{book.rating}/5.0</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 pb-2 3xl:pb-4">
              <span className="text-[12px] lg:text-[16px] 3xl:text-[18px] text-black font-semibold">
                Description
              </span>
              <div
                className={`max-w-[400px] text-black ${
                  expanded ? '' : 'line-clamp-5'
                }`}
              >
                <p>{book.description}</p>
              </div>
              <button
                className="text-crayola hover:text-opacity-80 font-semibold w-full flex justify-end"
                onClick={toggleDescription}
              >
                {expanded ? 'Brief Description' : 'Read More'}
              </button>
            </div>
            {wishlisted ? (
              <button className="flex w-[fit-content] items-center justify-center gap-x-3 px-4 py-2 text-[12px] lg:text-[16px] 3xl:text-[18px] rounded-lg bg-success shadow-lg hover:bg-opacity-80">
                <BsCheckLg size="20" />
                Added to wishlist
              </button>
            ) : (
              <button className="flex w-[fit-content] items-center justify-center gap-x-3 px-4 py-2 text-[12px] lg:text-[16px] 3xl:text-[18px] rounded-lg bg-crayola shadow-lg hover:bg-opacity-80">
                <HiOutlinePlus />
                Add to wishlist
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          {recommendations.map((book, index) => {
            return (
              <BookCard
                {...book}
                key={index}
                bgColor="white"
                detailLink={`/detail/${book.id}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
