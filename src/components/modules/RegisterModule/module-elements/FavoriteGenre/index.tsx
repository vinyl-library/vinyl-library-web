import React from 'react'
import { GENRES } from './constant'
import { FavoriteGenreProps } from './interface'

const FavoriteGenre: React.FC<FavoriteGenreProps> = ({
  onClick,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-wrap">
      {GENRES.map((genre) => (
        <button
          key={genre.id}
          onClick={onClick}
          className={`px-4 py-2 my-2 mr-2 rounded-full font-semibold ${className}`}
          {...props}
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default FavoriteGenre
