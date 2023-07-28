import React, { createContext, useContext } from 'react'
// import from './interface'

const AuthContext = createContext({}) // TODO: Declare interface of contextValue

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC = () => {
  // TODO: Write context's logic

  const contextValue = {}

  return <AuthContext.Provider value={contextValue}></AuthContext.Provider>
}
