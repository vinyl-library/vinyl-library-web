import React, { ComponentPropsWithoutRef } from 'react'
import { Footer, Navbar } from './module-elements'

export const LayoutModule: React.FC<ComponentPropsWithoutRef<'main'>> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
