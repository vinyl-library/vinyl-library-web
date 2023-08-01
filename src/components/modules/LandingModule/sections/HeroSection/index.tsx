import React from 'react'
import Image from 'next/image'

export const HeroSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col gap-y-4 md:gap-0 xl:flex-row items-center px-8 3xl:px-12 py-24 3xl:py-28 justify-between h-full">
          <div className="flex flex-col gap-y-4 pl-8">
            <div className="flex flex-col gap-y-2 font-extrabold text-[36px] lg:text-[48px] 3xl:text-[60px] xl:absolute">
              <h1
                className="text-crayola"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                Discover New Worlds,
              </h1>
              <h1
                className="text-buff"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                Borrow the Stories
              </h1>
            </div>

            <div className="xl:absolute flex">
              <p
                className="max-w-[90%] text-bean text-[10px] lg:text-[16px] 3xl:text-[24px]"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                Embrace the Magic of Words: Borrow Novels, Unleash Imagination!
                Vinyl library offers a world of captivating stories across
                genres, waiting to be explored.
              </p>
            </div>
          </div>

          <div
            className="xl:absolute xl:-right-12 xl:bottom-16"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <Image
              alt="Hero image"
              src="/Hero.png"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[40rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
