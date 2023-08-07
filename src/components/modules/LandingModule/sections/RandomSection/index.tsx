import React from 'react'

export const RandomSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-y-12 container mx-auto h-full bg-lace py-24 px-16 3xl:px-12">
      <div className="w-full h-full flex flex-col gap-y-8 justify-center items-center">
        <span className="flex text-3xl font-extrabold text-bean">
          Don’t know what to read?
        </span>
        <button className="bg-crayola rounded-xl px-12 py-8 font-bold flex text-2xl items-center">
          Let us pick one for you!
        </button>
      </div>
    </section>
  )
}
