import { HeroSection, MostPopularSection } from './sections'
import { RandomSection } from './sections/RandomSection'
import { RecommendedForYouSection } from './sections/RecommendedForYouSection'

export const LandingModule: React.FC = () => {
  return (
    <>
      <HeroSection />
      <MostPopularSection />
      <RecommendedForYouSection />
      <RandomSection />
    </>
  )
}
