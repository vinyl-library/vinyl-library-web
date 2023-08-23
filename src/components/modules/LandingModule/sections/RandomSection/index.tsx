import React from 'react'
import { RandomSectionProps } from './interface'

export const RandomSection: React.FC<RandomSectionProps> = ({ bgColor, aosDelay }) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`flex flex-col gap-y-12 mx-auto h-full bg-${bgColor} py-24 px-16 3xl:px-12`}
    >
      <div className="w-full h-full flex flex-col gap-y-8 justify-center items-center">
        <span className="flex text-3xl font-extrabold text-bean">
          Don&apos;t know what to read?
        </span>
        <button className="bg-crayola rounded-xl px-12 py-6 hover:shadow-lg font-bold flex text-2xl items-center">
          Let us pick one for you!
        </button>
      </div>
    </section>
  )
}
