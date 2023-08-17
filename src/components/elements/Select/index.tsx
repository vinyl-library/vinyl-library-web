import React, { useState, useEffect } from 'react'
import { SelectProps } from './interface'

export const Select: React.FC<SelectProps> = ({
  options,
  className,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>()
  const [selectedOption, setSelectedOption] = useState<string>(options[0].name)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  useEffect(() => {
    selectedValue && onChange(selectedValue)
    setIsDropdownOpen(false)
  }, [selectedValue])

  return (
    <div className="relative text-left font-semibold">
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="cursor-pointer rounded-lg bg-crayola px-4 py-2 text-md font-medium hover:bg-opacity-90 flex items-center justify-between"
      >
        <span className="pr-6">{selectedOption}</span>
        <div
          className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''
            }`}
        >
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 xl:w-64 rounded-md shadow-lg bg-crayola ring-1 ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedValue(option.value)
                  setSelectedOption(option.name)
                }}
                className="block w-full text-left px-4 py-2 text-md hover:bg-white/20 hover:text-white/80"
                role="menuitem"
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
