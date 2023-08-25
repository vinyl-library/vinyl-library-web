import React, { createContext, useContext } from 'react'
import { DetailContextProps, DetailContextProviderProps } from './interface'

const DetailContext = createContext<DetailContextProps>(
  {} as DetailContextProps
)

export const useDetailContext = () => useContext(DetailContext)

export const DetailContextProvider: React.FC<DetailContextProviderProps> = ({
  children,
  book,
  wishlisted,
  recommendations,
}) => {
  const contextValue = {
    book,
    wishlisted,
    recommendations,
  }

  return (
    <DetailContext.Provider value={contextValue}>
      {children}
    </DetailContext.Provider>
  )
}
