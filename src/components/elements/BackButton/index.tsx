import { BiArrowBack } from 'react-icons/bi'
import { BackButtonProps } from './interface'
import { ComponentPropsWithoutRef } from 'react'

export const BackButton: React.FC<ComponentPropsWithoutRef<"button">> = ({
  onClick,
  className,
}) => {
  return (
    <div className="w-full font-bold flex justify-start">
      <button
        onClick={onClick}
        className={`${className} flex items-center gap-x-2 px-4 py-1 bg-transparent border-2 border-tiger text-tiger text-lg rounded-full transition-colors duration-700 transform hover:bg-tiger hover:text-gray-100 focus:border-4 focus:border-indigo-300`}
      >
        <BiArrowBack size="20" />
        Back
      </button>
    </div>
  )
}
