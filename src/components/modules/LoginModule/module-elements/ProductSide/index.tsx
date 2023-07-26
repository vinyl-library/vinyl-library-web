import React from 'react'
import Image from 'next/image'

const ProductSide: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-buff lg:bg-opacity-10 rounded-l-xl flex relative order-2 lg:order-1">
      <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
        <span className="transform whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-crayola opacity-0 transition-all group-hover:opacity-60 ml-10 lg:ml-12 2xl:ml-32 group-hover:-ml-20 2xl:group-hover:ml-40 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
          vinyl library
        </span>
      </div>

      <div className="absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
        <Image
          src="/Login.png"
          alt="Login image"
          width={0}
          height={0}
          sizes="100vw"
          className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-24 2xl:group-hover:translate-x-32 transition-all duration-1000 lg:duration-700 ease-in-out"
        />
        <div className="shadow w-full h-8 bg-tiger bg-opacity-20 filter blur absolute bottom-0 md:bottom-12 lg:bottom-18 xl:bottom-24 2xl:bottom-28 left-0 lg:left-24 rounded-full transform skew-x-20"></div>
      </div>

      <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>
    </div>
  )
}

export default ProductSide
