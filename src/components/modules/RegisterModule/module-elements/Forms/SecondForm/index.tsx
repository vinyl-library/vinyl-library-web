import React, { useState } from 'react'
import { SecondFormInput } from './interface'
import { useFormContext } from 'react-hook-form'
import Genre from '../../Genre'
import toast from 'react-hot-toast'
import { useRegisterContext } from '@contexts'

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
    <div className="mx-auto my-4 p-4">
      <span className="flex text-crayola text-xl font-semibold mb-4">
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
        <p className="text-[#f71e3f] mt-2">Please select at least one genre</p>
      )}
      {selectedGenres.length > 5 && (
        <p className="text-[#f71e3f] mt-2">
          You can select up to 5 genres only
        </p>
      )}
    </div>
  )
}
