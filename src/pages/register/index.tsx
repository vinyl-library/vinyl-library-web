import React from 'react'
import { RegisterModule } from '@modules'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { RegisterContextProvider } from '@contexts'
import axios from 'axios'
import { RegisterPageProps } from './interface'

const Register = ({
  genre,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <RegisterContextProvider genre={genre}>
      <RegisterModule />
    </RegisterContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps<
  RegisterPageProps
> = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_API + '/api/genre')
  return { props: { genre: res.data.data.genre } }
}

export default Register
