import React, { useState } from 'react'
import { SecondFormInput } from './interface'
import { useFormContext } from 'react-hook-form'
import Genre from '../../Genre'
import toast from 'react-hot-toast'
import { useRegisterContext } from '@contexts'
import { ErrorIcon } from '@icons'

export const SecondForm: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const {
    setValue,
    formState: { errors },
  } = useFormContext<SecondFormInput>()

  const { genre } = useRegisterContext()

  const handleGenreSelection = (genreId: string) => {
    if (selectedGenres.includes(genreId)) {
      const newSelected = selectedGenres.filter((id) => id !== genreId)
      setSelectedGenres(newSelected)
      setValue('favoriteGenre', newSelected)
    } else if (selectedGenres.length < 5) {
      const newSelected = [...selectedGenres, genreId]
      setSelectedGenres(newSelected)
      setValue('favoriteGenre', newSelected)
    } else {
      toast.error('Haloooo')
    }
  }

  return (
    <div className=" flex flex-col gap-5 mx-auto p-4">
      <span className="flex text-crayola text-[12px] md:text-[14px] xl:text-[18px] font-bold py-2">
        Select Your Favorite Genres
      </span>
      <div className="flex flex-wrap">
        {genre.map((genre) => {
          return (
            <Genre
              onClick={() => handleGenreSelection(genre.id)}
              key={genre.id}
              value={genre.name}
              isSelected={selectedGenres.includes(genre.id)}
            />
          )
        })}
      </div>

      {errors.favoriteGenre && (
        <div className="flex items-center text-left text-[10px] md:text-[12px] xl:text-[16px] gap-[4px] text-[#f71e3f]">
          <ErrorIcon size="" />
          Please select at least one genre!
        </div>
      )}
    </div>
  )
}
