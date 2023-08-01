import { useAuthContext } from '@contexts'
import { VinylLogo } from '@icons'
import Link from 'next/link'

export const Footer: React.FC = () => {
  const { user } = useAuthContext()

  return (
    <footer className="flex flex-col gap-y-6 md:gap-0 md:flex-row md:justify-between bg-transparent p-8 3xl:p-10 w-full bottom-0">
      <div className="flex flex-col gap-y-3">
        <Link href="/" className="flex gap-x-4 items-center">
          <VinylLogo size="w-16 h-16" />
          <span className="flex text-tiger font-black font-mulish text-[40px]">
            Vinyl
          </span>
        </Link>

        <span className="flex text-bean font-medium">
          © 2023 Vinyl Library. All rights reserved.
        </span>
      </div>

      <div className="flex flex-col items-end justify-center gap-y-4 font-semibold">
        {user === undefined ? (
          <></>
        ) : (
          <>
            <Link
              href="/"
              className="text-buff hover:brightness-110 text-[20px] font-bold"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-buff hover:brightness-110 text-[20px] font-bold"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-buff hover:brightness-110 text-[20px] font-bold"
            >
              Dashboard
            </Link>
          </>
        )}
      </div>
    </footer>
  )
}
