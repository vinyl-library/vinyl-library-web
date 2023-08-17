import React from 'react'
import type { NextPage } from 'next'
import { LandingModule } from '@modules'
import { BooksContextProvider } from '@contexts'

const Home: NextPage = () => {
	return (
		<BooksContextProvider>
			<LandingModule />
		</BooksContextProvider>
	)
}

export default Home
