import { FaUserCircle } from 'react-icons/fa'
import { ProfileDropdownProps } from './inteface'
import { FiChevronDown, FiChevronUp, FiLogOut } from 'react-icons/fi'
import { useState } from 'react'
import { useAuthContext } from '@contexts'

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  name,
  username,
  fine,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isArrowOpen, setIsArrowOpen] = useState(false)
  const { logout } = useAuthContext()

  return (
    <>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen)
          setIsArrowOpen(!isArrowOpen)
        }}
      >
        <FaUserCircle fill="#FB5770" className="w-10 h-10" />
        {isArrowOpen ? (
          <FiChevronUp className="w-6 h-6" />
        ) : (
          <FiChevronDown className="w-6 h-6" />
        )}
      </div>
      {isOpen && (
        <div
          className="flex flex-col items-start absolute rounded-lg border border-tiger bg-white text-black
          px-4 py-2 top-14 -left-32 w-48"
        >
          <span className="font-bold uppercase text-">{name}</span>
          <span>@{username}</span>
          <span>Fine: Rp{fine}</span>
          <div className="border-t-2 border-black my-2 w-full" />
          <button
            className="text-sm text-white rounded-xl flex gap-x-2 bg-crayola justify-center items-center px-3 py-2"
            onClick={logout}
          >
            <FiLogOut />
            Sign Out
          </button>
        </div>
      )}
    </>
  )
}
