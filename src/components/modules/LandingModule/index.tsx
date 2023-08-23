import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HeroSection, MostPopularSection } from './sections'
import { RandomSection } from './sections/RandomSection'
import { RecommendedForYouSection } from './sections/RecommendedForYouSection'
import { useAuthContext } from '@contexts'

export const LandingModule: React.FC = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <HeroSection />
      <MostPopularSection />
      {user === undefined ? <></> : <RecommendedForYouSection />}
      <RandomSection
        bgColor={`${user === undefined ? 'powder' : 'lace'}`}
        aosDelay={`${user === undefined ? 500 : 700}`} />
    </>
  )
}
