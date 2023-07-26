import React, { useState } from 'react'
import { SecondFormInput } from './interface'
import { useFormContext } from 'react-hook-form'
import FavoriteGenre from '../../FavoriteGenre'

const SecondForm: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const {
    formState: { errors },
  } = useFormContext<SecondFormInput>()

  const handleGenreSelection = (genreId: string) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres((prevSelected) =>
        prevSelected.filter((id) => id !== genreId)
      )
    } else if (selectedGenres.length < 5) {
      setSelectedGenres((prevSelected) => [...prevSelected, genreId])
    }
  }

  return (
    <div className="mx-auto my-4 p-4">
      <span className="flex text-crayola text-xl font-semibold mb-4">
        Select Your Favorite Genres
      </span>
      <FavoriteGenre
        onClick={() => handleGenreSelection}
        className={`
                selectedGenres.includes(genre.id)
                    ? 'bg-crayola text-[#ffffff]'
                    : 'bg-buff bg-opacity-70 text-buff'`}
      />
      {errors.genres && (
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

export default SecondForm
