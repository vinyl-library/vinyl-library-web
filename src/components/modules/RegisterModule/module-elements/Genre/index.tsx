import React from 'react'
import { GenreProps } from './interface'

const Genre: React.FC<
  GenreProps & React.ComponentPropsWithoutRef<'button'>
> = ({ value, isSelected, ...props }) => {
  return (
    <button
      type="button"
      className={`text-[10px] md:text-[12px] xl:text-[16px] px-2 py-1 my-2 mr-2 rounded-full font-semibold ${
        isSelected ? 'bg-buff bg-opacity-70 text-buff' : 'bg-crayola text-white'
      }`}
      {...props}
    >
      {value}
    </button>
  )
}

export default Genre
