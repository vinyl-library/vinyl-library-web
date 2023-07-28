import React, { createContext, useContext } from 'react'
import { RegisterContextProps, RegisterContextProviderProps } from './interface'

const RegisterContext = createContext<RegisterContextProps>({ genre: [] })

export const useRegisterContext = () => useContext(RegisterContext)

export const RegisterContextProvider: React.FC<
  RegisterContextProviderProps
> = ({ children, genre }) => {
  const contextValue = {
    genre,
  }

  return (
    <RegisterContext.Provider value={contextValue}>
      {children}
    </RegisterContext.Provider>
  )
}
