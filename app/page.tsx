import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stack from '@/components/Stack'
import Realisations from '@/components/Realisations'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stack />
        <Realisations />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
