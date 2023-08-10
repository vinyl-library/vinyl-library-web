import React from 'react'
import Image from 'next/image'
import { IoSearchSharp } from 'react-icons/io5'
import { usePlaceholderWriter } from '@hooks'

export const HeroSection: React.FC = () => {
  const searchPlaceholder = usePlaceholderWriter([
    'Aidah Novallia',
    'Bonaventura Galang',
  ])

  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col gap-y-4 md:gap-0 xl:flex-row px-8 3xl:px-12 py-6 justify-between h-full">
          <div className="flex flex-col gap-y-6 pl-8">
            <div className="flex flex-col gap-0 font-extrabold text-[36px] lg:text-[48px] 3xl:text-[60px]">
              <h1
                className="text-crayola"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                Discover New Worlds,
              </h1>
              <h1
                className="text-buff"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                Borrow the Stories
              </h1>
            </div>

            <div className="flex">
              <p
                className="max-w-[90%] text-bean text-[10px] lg:text-[16px] 3xl:text-[24px]"
                data-aos="fade-down"
                data-aos-delay="700"
              >
                Embrace the Magic of Words: Borrow Novels, Unleash Imagination!
                Vinyl library offers a world of captivating stories across
                genres, waiting to be explored.
              </p>
            </div>

            <div
              className="flex justify-between rounded-full w-[90%] bg-buff bg-opacity-20 shadow-md px-5 py-3 mt-6"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              <div className="flex gap-x-4 items-center w-full">
                <IoSearchSharp color="#FB5770" size="20" />
                <input
                  type="search"
                  className="bg-transparent w-full text-bean focus:outline-none"
                  placeholder={searchPlaceholder}
                />
              </div>

              <button className="flex items-center bg-crayola hover:bg-opacity-80 rounded-full font-semibold px-4 py-2">
                Search
              </button>
            </div>
          </div>

          <div
            className="flex justify-center items-start h-full w-full"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
              <Image
                src="/Hero.png"
                alt="Login image"
                width={0}
                height={0}
                sizes="100vw"
                className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 h-[18rem] xl:h-[28rem] 2xl:h-[34rem] 3xl:h-[36rem] w-auto object-cover transform group-hover:translate-x-20 2xl:group-hover:translate-x-30 transition-all duration-1000 lg:duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
