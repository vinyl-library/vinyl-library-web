import { HeroSection, MostPopularSection } from './sections'
import { RecommendedForYouSection } from './sections/RecommendedForYouSection'

export const LandingModule: React.FC = () => {
  return (
    <>
      <HeroSection />
      <MostPopularSection />
      <RecommendedForYouSection/>
    </>
  )
}
