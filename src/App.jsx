import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import ValueIntro from './components/sections/ValueIntro'
import ValueContent from './components/sections/ValueContent'
import Statistics from './components/sections/Statistics'
import Testimonial from './components/sections/Testimonial'
import UseCases from './components/sections/UseCases'
import Pricing from './components/sections/Pricing'
import Blog from './components/sections/Blog'
import CTA from './components/sections/CTA'
import FAQ from './components/sections/FAQ'
import { valueSections } from './data/valueContent'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ValueIntro />
        {valueSections.map((section, index) => (
          <ValueContent
            key={section.id}
            section={section}
            reversed={index % 2 === 1}
            compactTop={index === 0}
          />
        ))}
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
