import { useBooksContext } from '@contexts'
import { GenreFilterProps } from './interface'

export const GenreFilter: React.FC<GenreFilterProps> = ({ genres }) => {
  const { selectedGenres, setSelectedGenres } = useBooksContext()

  const handleGenreCheckboxChange = (genreId: string) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId))
    } else {
      setSelectedGenres([...selectedGenres, genreId])
    }
  }

  return (
    <div className="flex flex-col gap-y-1">
      {genres.map((genre) => {
        return (
          <div className="flex items-center gap-x-2" key={genre.id}>
            <input
              type="checkbox"
              value={genre.id}
              onChange={() => handleGenreCheckboxChange(genre.id)}
              className="cursor-pointer rounded bg-crayola"
            />
            <label>{genre.name}</label>
          </div>
        )
      })}
    </div>
  )
}
