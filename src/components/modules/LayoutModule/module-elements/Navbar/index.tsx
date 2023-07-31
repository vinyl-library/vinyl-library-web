import { useAuthContext } from '@contexts'
import { VinylLogo } from '@icons'
import Link from 'next/link'
import { ProfileDropdown } from './ProfileDropdown'

export const Navbar: React.FC = () => {
  const { user } = useAuthContext()

  return (
    <nav className="flex bg-transparent justify-between p-6">
      <div className="flex gap-x-8">
        <div className="flex gap-x-4 items-center">
          <VinylLogo size="w-14 h-14" />
          <span className="flex text-tiger font-black font-mulish text-[40px]">
            Vinyl
          </span>
        </div>

        <div className="flex gap-x-4 items-center">
          <Link
            href="/"
            className="text-buff hover:brightness-110 text-[24px] font-bold"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-buff hover:brightness-110 text-[24px] font-bold"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="md:flex items-center relative py-2 md:py-0 font-semibold">
        {user === undefined ? (
          <>
            <Link href="/login">
              <button className="bg-crayola px-4 py-2 font-bold rounded-full text-[20px]">
                Login
              </button>
            </Link>
          </>
        ) : (
          <ProfileDropdown
            name={user.name}
            username={user.username}
            fine={user.fine}
          />
        )}
      </div>
    </nav>
  )
}
