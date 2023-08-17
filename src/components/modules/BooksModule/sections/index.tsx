import { useBooksContext } from '@contexts'
import { BookCard, Select } from '@elements'
import React, { useState, useEffect } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { IoSearchSharp } from 'react-icons/io5'
import {
  Genre,
  GetAllGenresResponseInterface,
} from 'src/components/contexts/BooksContext/interface'
import { useAuthContext } from '@contexts'
import { useDebouncedCallback } from 'use-debounce'
import { ORDERBY, SORTBY } from './constant'
import { GenreFilter } from '../module-elements'
import { StockFilter } from '../module-elements/StockFilter'

export const BooksSection: React.FC = () => {
  const {
    books,
    pagination,
    setCurrentPage,
    setKeywordFilter,
    setRatingMin,
    setRatingMax,
    setOrderBy,
    setSortBy,
  } = useBooksContext()
  const [keywordInput, setKeywordInput] = useState<string>('')
  const [minRatingInput, setMinRatingInput] = useState<number>(0)
  const [maxRatingInput, setMaxRatingInput] = useState<number>(5)
  const [genres, setGenres] = useState<Genre[]>([])
  const { httpRequest } = useAuthContext()

  const fetchGenre = async () => {
    const { data } = await httpRequest<GetAllGenresResponseInterface>({
      method: 'get',
      path: '/api/genre',
    })

    const { genre } = data
    setGenres(genre)
  }

  useEffect(() => {
    fetchGenre()
  }, [])

  const handleMinRatingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const minValue = parseInt(event.target.value)
    setMinRatingInput(minValue)
    setRatingMin(minValue)
  }

  const handleMaxRatingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const maxValue = parseInt(event.target.value)
    setMaxRatingInput(maxValue)
    setRatingMax(maxValue)
  }

  const debounced = useDebouncedCallback((keyword: string) => {
    setKeywordFilter(keyword)
  }, 500)

  return (
    <section className="flex w-full">
      <div className="flex flex-col gap-y-6 p-10 text-bean">
        <span className="flex font-bold text-xl">Filter</span>
        <div className="flex flex-col gap-y-3">
          <span className="flex text-xl font-semibold">Genre</span>
          <GenreFilter genres={genres} />
        </div>

        <div className="flex flex-col gap-y-3">
          <span className="flex text-xl font-semibold">Stock</span>
          <div className="flex flex-col gap-y-1">
            <StockFilter label="Available" value="available" />
            <StockFilter label="All" value="all" />
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <span className="flex text-xl font-semibold">Rating</span>
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col gap-y-2">
              <label>Minimum (0-5)</label>
              <input
                type="range"
                min="0"
                max="5"
                value={minRatingInput}
                onChange={handleMinRatingChange}
                className="cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Maximum (0-5)</label>
              <input
                type="range"
                min="0"
                max="5"
                value={maxRatingInput}
                onChange={handleMaxRatingChange}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 px-12 3xl:px-20 w-full">
        <div className="flex gap-x-4 rounded-full w-80 px-4 py-2 text-bean focus:outline-crayola bg-buff bg-opacity-20 focus:bg-opacity-10 items-center">
          <IoSearchSharp color="#FB5770" size="20" />
          <input
            className="bg-transparent w-full text-bean focus:outline-none"
            onChange={(e) => {
              setKeywordInput(e.target.value)
              debounced(e.target.value)
            }}
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter') setKeywordFilter(keywordInput)
            }}
          />
        </div>

        <div className="flex justify-between w-full">
          <span className="text-tiger text-lg">
            Showing {pagination?.from}-{pagination?.to} from {pagination?.total}{' '}
            results
          </span>

          <div className="flex items-center gap-x-6 3xl:gap-x-8">
            <Select options={SORTBY} onChange={(value) => setSortBy(value)} />
            <Select options={ORDERBY} onChange={(value) => setOrderBy(value)} />
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          {books.map((book, index) => {
            return (
              <BookCard {...book} key={index} bgColor="white" detailLink="" />
            )
          })}
        </div>

        <div className="flex flex-col text-crayola font-bold gap-y-6">
          <span className="text-tiger text-lg">
            Showing {pagination?.from}-{pagination?.to} from {pagination?.total}{' '}
            results
          </span>
          <div className="flex justify-between">
            <button
              className="flex items-center gap-x-2"
              onClick={() => {
                if (pagination && pagination.page > 1) {
                  setCurrentPage(pagination.page - 1)
                }
              }}
            >
              <HiArrowLeft />
              Previous Page
            </button>
            <button
              className="flex items-center gap-x-2"
              onClick={() => {
                if (pagination && pagination.page < pagination.totalPage) {
                  setCurrentPage(pagination.page + 1)
                }
              }}
            >
              Next Page
              <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
