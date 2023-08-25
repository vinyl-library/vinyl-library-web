import React, { createContext, useContext } from 'react'
import { DetailContextProps, DetailContextProviderProps } from './interface'

const DetailContext = createContext<DetailContextProps | undefined>(undefined)

export const useDetailContext = () => useContext(DetailContext)

export const DetailContextProvider: React.FC<DetailContextProviderProps> = ({
  children,
  book,
}) => {
  const contextValue = {
    book,
  }

  return (
    <DetailContext.Provider value={contextValue}>
      {children}
    </DetailContext.Provider>
  )
}
