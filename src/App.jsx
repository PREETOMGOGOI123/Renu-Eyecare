
import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Background from '../src/components/ui/Background'
import Header from '../src/components/Header/Header'
import Hero from '../src/layout/hero'
import EyecareMatters from '../src/layout/eycareMatters'
import Services from './layout/services'
import Doctors from './layout/doctors'
import ContactUs from './layout/contactUs'
import Footer from '../src/components/Footer/Footer'

function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])

  return (
    <main className='h-screen'>
      <Background />
      <Header />
      <Hero />
      <EyecareMatters />
      <Services />
      <Doctors />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default Page
