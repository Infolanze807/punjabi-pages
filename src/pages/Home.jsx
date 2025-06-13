import React from 'react'
import { HeroSection } from '../components/HomePages/HeroSection'
import { PopularBusinesses } from '../components/HomePages/PopularBusinesses'
import { CallToAction } from '../components/HomePages/CallToAction'
import { MobileAppSection } from '../components/HomePages/MobileAppSection'
import { FuturisticStats } from '../components/HomePages/FuturisticStats'
import FeaturedBusiness from '../components/HomePages/FeaturedBusiness'
import TestimonialsSection from '../components/HomePages/TestimonialsSection'
import CategoriesSection from '../components/HomePages/CategoriesSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedBusiness />
      <FuturisticStats />
      <PopularBusinesses />
      <CallToAction />
      <MobileAppSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home
