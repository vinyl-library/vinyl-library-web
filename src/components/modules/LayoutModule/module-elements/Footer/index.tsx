import { VinylLogo } from '@icons'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between bg-transparent p-8 w-full bottom-0">
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-4 items-center">
          <VinylLogo size="w-16 h-16" />
          <span className="flex text-tiger font-black font-mulish text-[40px]">
            Vinyl
          </span>
        </div>

        <span className="flex text-bean font-medium">
          © 2023 Vinyl Library. All rights reserved.
        </span>
      </div>

      <div className="flex flex-col items-end justify-center gap-y-4 font-semibold">
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
      </div>
    </footer>
  )
}
