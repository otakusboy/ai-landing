import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import Features from './components/sections/Features'
import Statistics from './components/sections/Statistics'
import Testimonial from './components/sections/Testimonial'
import UseCases from './components/sections/UseCases'
import Pricing from './components/sections/Pricing'
import Blog from './components/sections/Blog'
import CTA from './components/sections/CTA'
import FAQ from './components/sections/FAQ'
export default function App() {
  return (
    <>
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Statistics />
        <Testimonial />
        <UseCases />
        <Pricing />
        <Blog />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
