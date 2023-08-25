import React from 'react'
import { DetailModule } from '@modules'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import {
  Book,
  Recommendation,
} from 'src/components/contexts/DetailContext/interface'
import { DetailContextProvider } from '@contexts'
import axios from 'axios'

export interface DetailPageProps {
  book: Book
  wishlisted: boolean
  recommendations: Recommendation[]
}

const Detail = ({
  book,
  wishlisted,
  recommendations,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DetailContextProvider
      book={book}
      wishlisted={wishlisted}
      recommendations={recommendations}
    >
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
    console.log(res)
    return {
      props: {
        book: res.data.data.book,
        wishlisted: res.data.data.wishlisted,
        recommendations: res.data.data.recommendations,
      },
    }
  } catch (error) {
    console.log(error)
    return { props: { book: null, wishlisted: false, recommendations: [] } }
  }
}

export default Detail
