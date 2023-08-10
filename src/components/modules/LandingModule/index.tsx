import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HeroSection, MostPopularSection } from './sections'
import { RandomSection } from './sections/RandomSection'
import { RecommendedForYouSection } from './sections/RecommendedForYouSection'

export const LandingModule: React.FC = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <HeroSection />
      <MostPopularSection />
      <RecommendedForYouSection />
      <RandomSection />
    </>
  )
}
