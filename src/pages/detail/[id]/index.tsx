import React from 'react'
import { DetailModule } from '@modules'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Book } from 'src/components/contexts/DetailContext/interface'
import { DetailContextProvider } from '@contexts'
import axios from 'axios'

export interface DetailPageProps {
  book: Book
}

const Detail = ({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DetailContextProvider book={book}>
      <DetailModule />
    </DetailContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps<DetailPageProps> = async (
  context
) => {
  const { id } = context.query

  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API + `/api/book/${id}`)
    return { props: { book: res.data.data.book } }
  } catch (error) {
    console.log(error)
    return { props: { book: null } }
  }
}

export default Detail
