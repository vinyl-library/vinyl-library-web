import { useBooksContext } from '@contexts'
import { BookCard } from '@elements'
import React, { useEffect, useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { IoSearchSharp } from 'react-icons/io5'

export const BooksSection: React.FC = () => {
  const {
    books,
    pagination,
    genres,
    selectedGenres,
    setCurrentPage,
    setKeywordFilter,
    setSelectedGenres,
    setStock,
    setRatingMin,
    setRatingMax,
  } = useBooksContext()
  const [keywordInput, setKeywordInput] = useState<string>('')
  // const [genreInput, setGenreInput] = useState<string[]>([])
  const [stockInput, setStockInput] = useState<string>('')
  const [minRatingInput, setMinRatingInput] = useState<number>(0)
  const [maxRatingInput, setMaxRatingInput] = useState<number>(0)

  const handleGenreCheckboxChange = (genreId: string) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId))
    } else {
      setSelectedGenres([...selectedGenres, genreId])
    }
  }

  const handleStockRadioChange = (value: string) => {
    setStockInput(value)
    setStock(value)
  }

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

  useEffect(() => {
    console.log(minRatingInput)
  }, [minRatingInput])

  return (
    <section className="flex w-full">
      <div className="flex flex-col gap-y-6 p-10 text-bean">
        <span className="flex font-bold text-xl">Filter</span>
        <div className="flex flex-col gap-y-3">
          <span className="flex text-xl font-semibold">Genre</span>
          <div className="flex flex-col gap-y-1">
            {genres.map((genre) => {
              return (
                <div className="flex items-center gap-x-2" key={genre.id}>
                  <input
                    type="checkbox"
                    value={genre.id}
                    onChange={() => handleGenreCheckboxChange(genre.id)}
                    className="rounded bg-crayola"
                  />
                  <label>{genre.name}</label>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <span className="flex text-xl font-semibold">Stock</span>
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                value="available"
                checked={stockInput === 'available'}
                onChange={() => handleStockRadioChange('available')}
              />
              <label>Available</label>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                value="all"
                checked={stockInput === 'all'}
                onChange={() => handleStockRadioChange('all')}
              />
              <label>All</label>
            </div>
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
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 px-12">
        <div className="flex gap-x-4 rounded-full w-80 px-4 py-2 text-bean focus:outline-crayola bg-buff bg-opacity-20 focus:bg-opacity-10 items-center">
          <IoSearchSharp color="#FB5770" size="20" />
          <input
            className="bg-transparent w-full text-bean focus:outline-none"
            onChange={(e) => {
              setKeywordInput(e.target.value)
            }}
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter') setKeywordFilter(keywordInput)
            }}
          />
        </div>

        <div className="flex justify-between">
          <span className="text-tiger text-lg">
            Showing {pagination?.from}-{pagination?.to} from {pagination?.total}{' '}
            results
          </span>

          <select className="bg-crayola rounded-lg focus:outline-none px-4 py-2">
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
          </select>
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
