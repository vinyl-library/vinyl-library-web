import React from 'react'
import { BookProps } from './interface'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

export const BookCard: React.FC<BookProps> = ({
  author,
  title,
  genre,
  rating,
  coverUrl,
  bgColor,
  detailLink,
}) => {
  const displayedGenres = genre
    .filter((g) => g.name.length <= 10)
    .slice(0, 2)
    .map((g, index) => {
      return (
        <div
          key={index}
          className="bg-crayola rounded-full text-[6px] lg:text-[10px] 3xl:text-[12px] font-semibold px-2 py-1"
        >
          {g.name}
        </div>
      )
    })

  return (
    <Link
      href={detailLink}
      className={`rounded-xl shadow-lg flex h-auto flex-col bg-${bgColor}`}
    >
      <div className="top-0 inset-x-0 rounded-t-xl h-30 flex justify-center">
        <Image src={coverUrl} alt="img" width={100} height={100} className="" />
      </div>
      <div className="flex flex-col p-4 gap-2 w-52 h-32 lg:h-40 3xl:h-48">
        <span className="flex items-start italic text-black/60 text-[8px] lg:text-[12px] 3xl:text-[14px]">
          {author}
        </span>
        <span className="font-bold text-bean text-[10px] lg:text-[14px] 3xl:text-[16px] line-clamp-2">
          {title}
        </span>
        <div className="flex gap-1">{displayedGenres}</div>
        <div className="flex gap-1 items-center">
          <AiFillStar size="15" color="#3B1500" />
          <span className="text-bean text-[10px] lg:text-[13px] 3xl:text-[15px]">
            {rating}/5.0
          </span>
        </div>
      </div>
    </Link>
  )
}
